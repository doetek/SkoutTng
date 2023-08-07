import  { useState } from "react";
import camera from "../assets/icon/camera-outline.svg";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import useFetch from "../hooks/fetch.hook";
import { updateUser } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import "../components/profile.css";



export default function Editprofile() {
  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, {
        profile: file || apiData?.profile || "",
      });

      values = await Object.assign(values, {
        banner: file || apiData?.banner || "",
      });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating...",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update image size must be 50kb or lesser!</b>,
      });
      updatePromise.then(function () {
        navigate("/profilepage");
      });
    },
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  if (isLoading) return <h1 style={{textAlign:"center", marginTop:"200px"}}>isLoading</h1>;
  if (serverError)
    return <h1 style={{textAlign:"center", marginTop:"200px"}}>{serverError.message}</h1>;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
  
      
      <form  onSubmit={formik.handleSubmit}>
            <div className="profile">
            <img
            src={apiData?.profile || file || camera}
            alt="Banner"
            style={{ width: "100%", maxHeight: "130px" }}
            className="cover-pic"
          />
            

              <input
                onChange={onUpload}
                type="file"
                id="banner"
                name="banner"
              />
            </div>
            </form>
    </>
  );
}
