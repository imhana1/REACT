import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../components/constants";
import LoadingSpinner from "../components/LoadingSpinner";
import ImageField from "../components/ImageField";
import FormField from '../components/FormField';
import axios from "axios";

const ContactRead = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get("no");
  if (!no) navigate("/");

  const { data, loading, error } = useFetch(`${API_URL}/${no}`);

  const remove = () => axios.delete(`${API_URL}/${no}`).then(()=>navigate("/")).catch(err=>console.log(err))

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <ImageField
        photoUrl={data.photo}
        alt="사진"
        name="photo"
        label="사진"
        disabled={true}
      />
      <FormField name='name' label='이름' value={data.name} readOnly={true} />
      <FormField name='address' label='주소' value={data.address} readOnly={true} />
      <FormField name='tel' label='연락처' value={data.tel} readOnly={true} />
      <button className="btn btn-primary" onClick={()=>navigate(`/update?no=${no}`)}>변경</button>
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={remove}>삭제</button>
    </div>
  );
};

export default ContactRead;
