import Layout from "../components/Layout";
import Faqs from "../data/faq";

function About() {
  return (
    <Layout>
      <div className="container my-5">
        <div className="aboutSection">
          <h2 className="text-5xl mb-4">About Madam&#39; Boutique</h2>
          <p className="font-light">
            Welcome to Madam&#39; Boutique, your go-to destination for the
            latest trends in ladies fashion. At our online store, we curate a
            collection of stylish and elegant clothing to cater to the modern
            woman&#39;s wardrobe needs. <br /> <br />
            Our team of fashion enthusiasts is dedicated to staying ahead of the
            curve, bringing you the freshest styles from around the world. We
            believe that every woman deserves to feel beautiful and express her
            unique style effortlessly.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            fugit praesentium commodi temporibus blanditiis. Eveniet quod
            placeat ratione iusto doloremque excepturi amet et libero sit
            pariatur molestias, accusamus quos earum? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dolor laudantium aspernatur omnis
            recusandae sapiente dolorem suscipit quos molestias quae, iste
            veniam eius harum perspiciatis deleniti? Assumenda itaque
            voluptatibus ipsa similique.
          </p>
        </div>
        <section className="mt-5">
          <h3 className="text-3xl">Frequently Asked Questions</h3>
          <div className="accordion mt-3" id="accordionExample">
            {Faqs.map((item) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#question-${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`question-${item.id}`}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body font-light">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
