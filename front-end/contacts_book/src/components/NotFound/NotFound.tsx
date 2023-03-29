import { Link } from "react-router-dom";
import NotFoundImg from "../../@types/assets/NotFoundImg.jpg";

export const NotFound = () => {
  return (
    <section>
      <img src={NotFoundImg} alt="" />
      <Link to={"/"}> Voltar </Link>
    </section>
  );
};
