import styled from "styled-components";
import type { MovieType, MypickType } from "../types";
import { addMypickApi, deleteMypickApi, getMypicDetailkApi, updateMypickApi } from "../services/mypickApi";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalContainer = styled.div`
  background-color: #ffffff;
  width: 50vw;
  height: fit-content;
  border-radius: 20px;
  position: absolute;

  & img {
    width: 200px;
    
  }
`
const CloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`

type MovieModalProps = {
  movie : MovieType, 
  onClose : ()=>void
}

const MovieModal = ({movie, onClose}: MovieModalProps) => {
  const [loading, setLoading] = useState(false);

  const [mypickDetail, setMypickDetail] = useState<{isMypick : true, mypick : MypickType} | null>(null);
  const [addMode, setAddMode] = useState(false);

  const [isWatched, setIsWatched] = useState(false);
  const [memo, setMemo] = useState("");

  if (!movie) return null;

  const addMypick = async () => {
    const { data } = await addMypickApi({movie, is_watched : isWatched, memo});
    console.log(data);
    // onClose();
  }

  const updateMypick = async () => {
    if (!mypickDetail?.mypick.id) return;
    const { data } = await updateMypickApi({mypick_id: mypickDetail.mypick.id, is_watched : isWatched, memo});
    console.log(data);
    // onClose();
  }

  const deleteMypick = async () => {
    if (!mypickDetail?.mypick.id) return;
    const { data } = await deleteMypickApi(mypickDetail.mypick.id);
    console.log(data);
    // onClose();
  }

  const getMypickDetail = async () => {
    if (!movie.id) return;
    setLoading(true);
    const { data } = await getMypicDetailkApi(movie.id);
    setLoading(false);
    console.log(data);
    if (data) setMypickDetail(data);
  }

  useEffect(()=> {
    getMypickDetail();
  }, []);

  return (
    <Overlay onClick={onClose}>
      <ModalContainer>
        {loading && <Loading />}
        
        <CloseBtn onClick={onClose}>X</CloseBtn>
        {movie.title}
        <img src={movie.imgUrl} />
        <div>{movie.genres?.map((genre)=>{return <span>{genre}</span>})}</div>
        <p>{movie.overview}</p>
        <span>{movie.release_date}</span>
        
        {
          mypickDetail?.isMypick ?
            <>
              <label><input type="checkbox" defaultChecked={mypickDetail.mypick.is_watched} onChange={(e)=>{setIsWatched(e.target.checked)}}/>시청여부</label>
              <textarea onChange={(e)=>{setMemo(e.target.value)}}>{mypickDetail.mypick.memo}</textarea>
              <div onClick={updateMypick}>수정</div>
              <div onClick={deleteMypick}>삭제</div>
            </>
          :
          <div onClick={()=>{setAddMode(true)}}>mypick 추가</div>
        }
        {
          addMode && (
            <>
              <label><input type="checkbox" onChange={(e)=>{setIsWatched(e.target.checked)}}/>시청여부</label>
              <textarea onChange={(e)=>{setMemo(e.target.value)}}>메모</textarea>
              <div onClick={addMypick}>저장</div>
            </>
          )
        }
      </ModalContainer>
    </Overlay>
  )
}

export default MovieModal