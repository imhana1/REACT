import useComment from "../../hooks/useComment";
import BlockButton from "../commons/BlockButton";


const CommentWrite = ({pno}) => {
    const vc = useComment();

    return (
    <div>
      <label htmlFor='content' className='form-label'>댓글 작성:</label>
      <textarea className='form-control' placeholder={vc.message} onChange={vc.onChange} value={vc.value} onBlur={vc.onBlur}></textarea>
      <BlockButton styleName='primary' onClick={()=>vc.onWrite(pno)} label="작성하기" />
    </div>
  )
};

export default CommentWrite;