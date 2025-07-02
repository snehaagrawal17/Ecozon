import "../Css/Sustainability.css";

import {
  FaChartLine,
  FaChevronRight,
  FaDownload,
  FaExternalLinkAlt,
  FaLeaf,
  FaMinus,
  FaPlus,
  FaRecycle,
  FaTree,
  FaWater
} from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5 }
};

function Sustainability() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);

  // Report data for cards
  const reports = [
    { year: "2023", url: "https://sustainability.aboutamazon.com/2023-sustainability-report.pdf", size: "17.7 MB" },
    { year: "2022", url: "https://sustainability.aboutamazon.com/2022-sustainability-report.pdf", size: "15.2 MB" },
    { year: "2021", url: "https://sustainability.aboutamazon.com/2021-sustainability-report.pdf", size: "14.8 MB" },
  ];

  // Climate Pledge stats
  const pledgeStats = [
    { value: "550+", label: "signatories" },
    { value: "60", label: "industries" },
    { value: "46", label: "countries" }
  ];

  // Metrics data
  const metrics = [
    {
      tag: "Achieved",
      value: "100%",
      description: "of electricity consumed by Amazon in 2023 was matched with renewable energy sources",
      detail: "Match 100% of the electricity consumed by our global operations with renewable energy by 2025—five years ahead of our original target of 2030"
    },
    {
      tag: "Progress",
      value: "13%",
      description: "decrease in carbon intensity since 2022",
      detail: "Reach net-zero carbon emissions by 2040—10 years ahead of the Paris Agreement"
    },
    {
      tag: "Progress",
      value: "41%",
      description: "of the way toward meeting AWS's water positive goal, as of the end of 2023",
      detail: "AWS will be water positive by 2030, returning more water to communities than it uses in its direct operations"
    }
  ];

  // Focus areas
  const focusAreas = [
    { 
      title: "Driving climate solutions", 
      description: "We aim to reach net-zero carbon emissions across our operations by 2040 by investing in carbon-free energy, scaling solutions, and collaborating with partners to broaden our impact.",
      icon: <FaLeaf />,
      link: "/climate-solutions",
      image: "/content/dam/sustainability-marketing-site/01-homepage/optimized-assets/WWS_Homepage_C10_Card04_1x.jpg"
    },
    { 
      title: "Reducing waste & packaging", 
      description: "We're working to manage and prevent waste and increase recyclability.",
      icon: <FaRecycle />,
      link: "/waste",
      image: "/content/dam/sustainability-marketing-site/01-homepage/optimized-assets/WWS_Homepage_C10_Card03_1x.jpg"
    },
    { 
      title: "Protecting natural resources", 
      description: "We strive to source and use natural resources in a responsible way across our business and supply chain, while investing in conservation and restoration initiatives.",
      icon: <FaWater />,
      link: "/natural-resources",
      image: "/content/dam/sustainability-marketing-site/01-homepage/optimized-assets/WWS_Homepage_C10_Card05_1x.jpg"
    },
    { 
      title: "Innovating products and services", 
      description: "We invent, develop, and deliver products and services in a responsible way that help our customers on their sustainability journeys.",
      icon: <FaChartLine />,
      link: "/products-services",
      image: "/content/dam/sustainability-marketing-site/01-homepage/optimized-assets/WWS_Homepage_C10_Card01_1x.jpg"
    }
  ];

  // Innovation accordion items
  const accordionItems = [
    {
      title: "Accelerating decarbonization of the electricity grid",
      content: "We're advocating for updated carbon accounting to measure where renewable energy projects will have the greatest impact. This will encourage companies to focus on reducing carbon from global electricity grids as quickly and cost-effectively as possible while accelerating and expanding an equitable energy transition for communities worldwide.",
      link: "https://www.amazon.science/blog/how-we-count-carbon-emissions-from-electricity-matters",
      linkText: "Read blog post"
    },
    {
      title: "Using generative AI to address the climate crisis",
      content: "Climate tech startups are using generative AI on AWS in exciting ways to address the climate crisis. At AWS, we're seeing generative AI transform how humans and businesses use technology to solve some of the world's most challenging problems.",
      link: "https://aws.amazon.com/blogs/startups/how-climate-tech-startups-use-generative-ai-to-address-the-climate-crisis/",
      linkText: "Read blog post"
    },
    {
      title: "Amplifying sustainability innovation in local communities",
      content: "Higher education institutions have utilized digital technology and cross-industry collaboration to accelerate and amplify their sustainability-focused innovation. Projects include applications that improve reporting on pollution data, counter illegal dumping, and even protect endangered species.",
      link: "https://aws.amazon.com/blogs/publicsector/higher-education-utilizes-cloud-student-engagement-to-drive-sustainability-improvements/",
      linkText: "Read blog post"
    }
  ];

  // Shopping cards
  const shoppingCards = [
    {
      number: "01",
      title: "Recycle, repair, or trade in",
      description: "We offer free set-up, troubleshooting, and replacement parts services. Plus, you can trade in or recycle Amazon devices and a variety of eligible devices from other manufacturers.",
      links: [
        {
          text: "Trade in or recycle",
          url: "https://www.amazon.com/b?node=70675030011&ref_=asch_trde"
        },
        {
          text: "Support and repairs",
          url: "https://www.amazon.com/b?node=70675463011&ref_=asch_repr"
        }
      ],
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      number: "02",
      title: "Choose certified products",
      description: "Our Climate Pledge Friendly program helps customers in the U.S. and EU discover and shop for more sustainable products. We collaborate with trusted third-party certifications and create our own to highlight products that meet sustainability standards and support our commitment to help preserve the natural world.",
      links: [
        {
          text: "Shop certified products",
          url: "https://www.amazon.com/b?node=21221607011"
        }
      ],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const toggleMetric = (index) => {
    setActiveMetric(activeMetric === index ? -1 : index);
  };

  return (
    <div className="sustainability-container">
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-content">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Delivering more than packages
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            At Amazon, we combine data and science with passion and invention to address some of the world's biggest environmental and societal challenges.
          </motion.p>
        </div>
      </motion.div>

      {/* Progress Metrics Section */}
      <motion.section 
        className="progress-metrics-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Big goals and key milestones
        </motion.h2>
        <motion.div 
          className="metrics-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              className={`metric-card ${activeMetric === index ? 'active' : ''}`}
              key={index}
              
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className="metric-tag">{metric.tag}</div>
              <div className="metric-content">
                <motion.div 
                  className="metric-value"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {metric.value}
                </motion.div>
                <div className="metric-description">{metric.description}</div>
              </div>
              <button 
                className="metric-expand-button"
                onClick={() => toggleMetric(index)}
              >
                <span className="plus-icon">
                  {activeMetric === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {activeMetric === index && (
                <motion.div 
                  className="metric-detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p>{metric.detail}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="explore-more-button"
          variants={fadeIn}
        >
          <motion.a 
            href="/progress" 
            className="primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore progress
            <FaChevronRight className="button-icon" />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Focus Areas Section */}
      <motion.section 
        className="focus-areas-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Browse our focus areas
        </motion.h2>
        <motion.div 
          className="focus-areas-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {focusAreas.map((area, index) => (
            <motion.div 
              className="focus-area-card"
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="focus-area-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <motion.a 
                href={area.link} 
                className="focus-area-link"
                whileHover={{ color: "#89B753" }}
              >
                Learn more
                <FaChevronRight className="chevron-right" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Climate Pledge Section */}
      <motion.section 
        className="climate-pledge-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div 
          className="climate-pledge-content"
          variants={fadeIn}
        >
          <motion.div 
            className="climate-pledge-video"
            variants={fadeIn}
          >
            <div className="video-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1313&q=80" 
                alt="The Climate Pledge" 
              />
              <motion.div 
                className="play-button"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              >
                <span>▶</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="climate-pledge-info"
            variants={fadeIn}
          >
            <h2>Driving global progress</h2>
            <motion.div 
              className="climate-pledge-stats"
              variants={staggerContainer}
            >
              {pledgeStats.map((stat, index) => (
                <motion.div 
                  className="stat" 
                  key={index}
                  variants={fadeIn}
                >
                  <motion.div 
                    className="stat-value"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <p>The Climate Pledge is our commitment to reach net-zero carbon emissions by 2040—10 years ahead of the Paris Agreement. It brings the world's top companies together to accelerate joint action and responsible change.</p>
            <motion.a 
              href="https://www.theclimatepledge.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit The Climate Pledge
              <FaExternalLinkAlt className="external-icon" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Packaging Innovation Section */}
      <motion.section 
        className="packaging-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div 
          className="packaging-content"
          variants={fadeIn}
        >
          <motion.h2 variants={fadeIn}>Reinventing packaging</motion.h2>
          <motion.p variants={fadeIn}>
            See how we're reinventing <span className="highlight">packaging</span> options to minimize waste, deliver products safely, and improve <span className="highlight">recyclability</span>.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Reports Section */}
      <motion.section 
        className="reports-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Popular downloads
        </motion.h2>
        <motion.div 
          className="reports-container"
          variants={staggerContainer}
        >
          {reports.map((report, index) => (
            <motion.div 
              key={report.year} 
              className="report-card"
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="report-image">
                <img 
                  src={`https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80`} 
                  alt={`${report.year} Sustainability Report`} 
                />
              </div>
              <div className="report-info">
                <div className="report-tag">Sustainability</div>
                <span className="report-size">PDF, {report.size}</span>
                <h3 className="report-title">{report.year} Sustainability Report</h3>
              </div>
              <div className="report-download">
                <motion.a 
                  href={report.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="download-button"
                  whileHover={{ scale: 1.1, backgroundColor: "#89B753" }}
                >
                  <FaDownload />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="see-all-button"
          variants={fadeIn}
        >
          <motion.a 
            href="/reports" 
            className="secondary-button"
            whileHover={{ 
              backgroundColor: "#00B099", 
              color: "#fff",
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            See all
            <FaChevronRight className="chevron-right" />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Innovation Section */}
      <motion.section 
        className="innovation-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Innovating through science
        </motion.h2>
        <motion.div 
          className="innovation-content"
          variants={fadeIn}
        >
          <motion.div 
            className="innovation-image"
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Solar panels" 
            />
          </motion.div>
          <motion.div 
            className="innovation-accordion"
            variants={staggerContainer}
          >
            {accordionItems.map((item, index) => (
              <motion.div 
                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                key={index}
                variants={fadeIn}
              >
                <motion.button 
                  className="accordion-button"
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ color: "#00B099" }}
                >
                  <span>{item.title}</span>
                  <motion.span 
                    className="accordion-icon"
                    animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPlus />
                  </motion.span>
                </motion.button>
                <motion.div 
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeAccordion === index ? "auto" : 0,
                    opacity: activeAccordion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.content}</p>
                  <motion.a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="tertiary-button"
                    whileHover={{ color: "#89B753" }}
                  >
                    {item.linkText}
                    <FaExternalLinkAlt className="external-icon" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.a 
          href="https://www.amazon.science/research-areas/sustainability" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="tertiary-button visit-science"
          variants={fadeIn}
          whileHover={{ color: "#89B753" }}
        >
          Visit Amazon Science
          <FaExternalLinkAlt className="external-icon" />
        </motion.a>
      </motion.section>

      {/* Shopping Sustainably Section */}
      <motion.section 
        className="shopping-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Shopping more sustainably
        </motion.h2>
        <motion.div 
          className="shopping-cards"
          variants={staggerContainer}
        >
          {shoppingCards.map((card, index) => (
            <motion.div 
              className="shopping-card" 
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
            >
              <span className="card-number">{card.number}</span>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="card-links">
                  {card.links.map((link, linkIndex) => (
                    <motion.a 
                      key={linkIndex}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tertiary-button"
                      whileHover={{ color: "#89B753" }}
                    >
                      {link.text}
                      <FaExternalLinkAlt className="external-icon" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="learn-more-button"
          variants={fadeIn}
        >
          <motion.a 
            href="/customers" 
            className="primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn more
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Sustainability;