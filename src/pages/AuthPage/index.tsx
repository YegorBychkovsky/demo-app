import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { LoginForm } from "../../components/ui/LoginForm";
import { RegisterForm } from "../../components/ui/RegisterForm";
import { currentFormSelect } from "../../redux/slices/AuthorizationSlice/exports";

const AuthPage = () => {
  const currentForm = useSelector(currentFormSelect);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
      }}>
      <Box
        sx={{
          width: 424,
          height: "100vh",
          backgroundColor: "#1D283A",
          paddingTop: 6,
          paddingLeft: 6,
          paddingRight: 6,
        }}>
        <p
          style={{
            fontSize: "36px",
            fontWeight: 700,
            lineHeight: 1.5,
          }}>
          InCode
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#539713",
          }}>
          Finance
        </p>
        <p
          style={{
            marginTop: 90,
            fontSize: "56px",
            fontWeight: 700,
          }}>
          {currentForm === "login" ? "SIGN IN" : "SIGN UP"}
        </p>
        {currentForm === "login" ? <LoginForm /> : <RegisterForm />}
      </Box>
    </Box>
  );
};

export default AuthPage;
function changeCurrentForm(formName: string): any {
  throw new Error("Function not implemented.");
}
