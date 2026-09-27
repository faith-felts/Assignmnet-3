import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Header storeName="ComponentCorner" />
      <main>
        <Hero
          title="Better tools for your everyday rituals."
          subtitle="A considered collection of clever tech, desk essentials, and little upgrades that make a difference."
          callToAction="Shop the collection"
        />

        <section className="products-section" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The edit</p>
              <h2>Objects with a point of view</h2>
            </div>
            <p className="section-note">01 / 03</p>
          </div>
          <div className="product-grid">
            <ProductCard
              name="Halo Desk Light"
              price="$128"
              image="https://placehold.co/600x400/e7d8c5/2e2924?text=Halo+Desk+Light"
              description="A soft, directional glow for deep work and late-night ideas."
              tag="Best seller"
            />
            <ProductCard
              name="Fold Wireless Stand"
              price="$74"
              image="https://placehold.co/600x400/cad8d1/2e2924?text=Fold+Wireless+Stand"
              description="A compact charging dock that keeps your desk beautifully clear."
              tag="New"
            />
            <ProductCard
              name="Field Notes Speaker"
              price="$196"
              image="https://placehold.co/600x400/d6cbdc/2e2924?text=Field+Notes+Speaker"
              description="Room-filling sound in a small, tactile form made for slow mornings."
              tag="Staff pick"
            />
          </div>
        </section>
      </main>
      <Footer
        storeName="ComponentCorner"
        description="Thoughtful technology for the way you work, rest, and make things."
        contact="hello@componentcorner.com"
      />
    </div>
  );
}

export default App;