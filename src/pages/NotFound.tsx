import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const content = {
    en: {
      title: "404",
      message: "Oops! This sacred path does not exist.",
      return_link: "Return to Temple"
    },
    te: {
      title: "404",
      message: "అయ్యో! ఈ పవిత్ర మార్గం ఉనికిలో లేదు.",
      return_link: "ఆలయానికి తిరిగి వెళ్ళండి"
    },
    hi: {
      title: "404",
      message: "ओह! यह पवित्र मार्ग अस्तित्व में नहीं है।",
      return_link: "मंदिर लौटें"
    }
  }[language];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-temple-cream text-temple-maroon">
      <div className="text-center">
        <span className="text-6xl text-temple-gold block mb-4">ॐ</span>
        <h1 className="mb-4 text-4xl font-sacred font-bold">{content.title}</h1>
        <p className="mb-4 text-xl font-body">{content.message}</p>
        <Link to="/" className="text-temple-gold underline hover:text-temple-saffron font-sacred tracking-widest uppercase text-sm">
          {content.return_link}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
