import Header from "../components/Header";
import Welcome from "../sections/Welcome";

export default function Home(){
  /* Hvis du vil sætte baggrund pr. side, kan du bruge:
     const style = { '--header-bg': `url(/images/min-baggrund.jpg)` }; */
  return (
    <>
      <Header /* style={style} */ />
      <Welcome />
    </>
  );
}
