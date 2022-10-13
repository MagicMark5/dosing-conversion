import ChevronHeader from "./materials/ChevronHeader";

export default function TermsOfUse({ modal }) {
  return (
    <main className={`nav-shadow ${modal ? "blur" : ""}`}>
      <ChevronHeader
        bgLeft={'bg-header-orange'}
        text={<><br/>Terms of Use</>}
        bgRight={'bg-header-red'}
      />
    </main>
  )
}