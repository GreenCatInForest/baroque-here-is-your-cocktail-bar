import { useFormContext } from "../contexts/formContext";
import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { CocktailsContainer } from "../components/Cocktails/CocktailsContainer";
import homeFormSectionImgLeft from "../assets/images/glass-29509_640.png";
import homeFormSectionImgRight from "../assets/images/image_fx_fhoto_of_a_smiling_statue_woman.jpg";
// "image_fx_fhoto_of_a_happy_greek_statue_enjoying_the_wi.jpg"
// "drink-2029520_1280.png"
// "bacchus-7330206_1280.png"
// "glass.png"
// "glass-29509_640.png"
// "champagne-29051_1280.png"
// "cup-5215986_1280.png"
// "image_fx_fhoto_of_a_smiling_statue_woman.jpg"

export const Home = () => {
  // state for search queries
  const { querySubmitted, setQuerySubmitted, query, setQuery, data, setData } =
    useFormContext();

  return (
    <div className="theme">
      <Banner />
      <div className="homeFormSection">
        <img
          src={homeFormSectionImgLeft}
          alt="cocktail"
          className="homeImage w-36"
        />
        <Form
          query={query}
          setQuery={setQuery}
          setQuerySubmitted={setQuerySubmitted}
          querySubmitted={querySubmitted}
          templateExplore="" // empty string to remove formStyleExplore class
        />
        <img
          src={homeFormSectionImgRight}
          alt="cocktail"
          className="homeImage w-64"
        />
      </div>
      <CocktailsContainer
        query={query}
        setQuery={setQuery}
        data={data}
        setData={setData}
        querySubmitted={querySubmitted}
        setQuerySubmitted={setQuerySubmitted}
      />
    </div>
  );
};
