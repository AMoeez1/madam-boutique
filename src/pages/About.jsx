import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="container">
        <div className="aboutSection">
          <h2 className="h2 mt-5">About Madam&#39; Boutique</h2>
          <p>
            Welcome to Madam&#39; Boutique, your go-to destination for the
            latest trends in ladies fashion. At our online store, we curate a
            collection of stylish and elegant clothing to cater to the modern
            woman&#39;s wardrobe needs.
          </p>
          <p>
            Madam&#39; Boutique is not just a store; it&#39;s a fashion
            experience designed to empower women and boost their confidence
            through the joy of dressing well. Whether you&#39;re looking for
            casual wear, formal attire, or trendy accessories, we have a wide
            range of options to suit every occasion.
          </p>
          <p>
            Our team of fashion enthusiasts is dedicated to staying ahead of the
            curve, bringing you the freshest styles from around the world. We
            believe that every woman deserves to feel beautiful and express her
            unique style effortlessly.
          </p>
        </div>
        <h3 className="h3 mt-5 text-center">Faqs about Madam&#39;s Boutique</h3>
        <div className="accordion mt-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Q1"
              >
                What types of clothing does Madam&#39;s Boutique specialize in?
              </button>
            </h2>
            <div id="Q1" className="accordion-collapse visible collapse show">
              <div className="accordion-body">
                Madam&#39;s Boutique specializes in ladies clothing, offering a
                wide range of styles from casual wear to formal attire.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion mt-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Q2"
              >
                Why choose Madam&#39;s Boutique?
              </button>
            </h2>
            <div id="Q2" className="accordion-collapse visible collapse show">
              <div className="accordion-body">
                {/* Madam&#39; Boutique is a world wide online shopping store. */}
                <ul>
                  <li>
                    Latest Fashion Trends: Stay in vogue with our carefully
                    curated collection of the latest fashion trends.
                  </li>
                  <li>
                    Quality Assurance: We prioritize quality in both our
                    products and customer service.
                  </li>
                  <li>
                    Convenient Shopping: Enjoy a seamless online shopping
                    experience with our user-friendly interface.
                  </li>
                  <li>
                    Fast and Reliable Delivery: We strive to get your favorite
                    pieces to your doorstep as quickly as possible.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion mt-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Q3"
              >
                What is Madam&#39;s Boutique?
              </button>
            </h2>
            <div id="Q3" className="accordion-collapse visible collapse show">
              <div className="accordion-body">
                Madam&#39;s Boutique stands out by offering a curated collection of
                the latest fashion trends, a commitment to quality, and a
                dedication to providing excellent customer service. We strive to
                create a unique and enjoyable shopping experience.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion mt-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Q4"
              >
                Does Madam&#39;s Boutique have a return policy?
              </button>
            </h2>
            <div id="Q4" className="accordion-collapse visible collapse show">
              <div className="accordion-body">
                Yes, Madam&#39;s Boutique has a customer-friendly return policy. If
                you are not satisfied with your purchase, you can refer to our
                return policy on the website for details on how to initiate a
                return.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion mt-3 mb-5" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Q5"
              >
                 Does Madam&#39;s Boutique offer fast and reliable delivery?
              </button>
            </h2>
            <div id="Q5" className="accordion-collapse visible collapse show">
              <div className="accordion-body">
                Yes, Madam&#39;s Boutique is dedicated to providing fast and
                reliable delivery services. We aim to get your favorite pieces
                to your doorstep as quickly as possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
