// src/components/SmartMoneyShowcase.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { smartMoney } from "../data/portfolioData";

function SmartMoneyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const activeScreen = smartMoney.gallery[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? smartMoney.gallery.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === smartMoney.gallery.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section className="section smartmoney-showcase" id="smartmoney">
        <motion.div
          className="smartmoney-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="smartmoney-heading">
            <div className="smartmoney-kicker">
              <span>01</span>
              <span>{smartMoney.type}</span>
              <span>{smartMoney.year}</span>
            </div>

            <h2>{smartMoney.title}</h2>
            <h3>{smartMoney.subtitle}</h3>
          </div>

          <div className="smartmoney-summary">
            <p>{smartMoney.description}</p>

            <div className="smartmoney-actions">
              <a
                href={smartMoney.github}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                <FiGithub />
                View Repository
                <FiArrowUpRight />
              </a>

              <span className="smartmoney-status">
                <i />
                {smartMoney.status}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="smartmoney-product"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="smartmoney-browser">
            <div className="smartmoney-browser-bar">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-title">
                <span>{activeScreen.label}</span>
                <small>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(smartMoney.gallery.length).padStart(2, "0")}
                </small>
              </div>

              <button
                type="button"
                className="browser-expand"
                onClick={() => setExpanded(true)}
                aria-label={`Expand ${activeScreen.label} screenshot`}
              >
                <FiMaximize2 />
              </button>
            </div>

            <div
              className="smartmoney-screen"
              onClick={() => setExpanded(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setExpanded(true);
                }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeScreen.label}
                  src={activeScreen.image}
                  alt={`SmartMoney ${activeScreen.label} interface`}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="smartmoney-gallery-control">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous SmartMoney screen"
            >
              <FiChevronLeft />
            </button>

            <div className="smartmoney-tabs">
              {smartMoney.gallery.map((screen, index) => (
                <button
                  type="button"
                  key={screen.label}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {screen.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next SmartMoney screen"
            >
              <FiChevronRight />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              className="smartmoney-screen-description"
              key={activeScreen.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {activeScreen.description}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <div className="smartmoney-capabilities">
          {smartMoney.capabilities.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span>{item.label}</span>
              <p>{item.value}</p>
            </motion.article>
          ))}
        </div>

        <div className="smartmoney-story">
          <div className="smartmoney-story-heading">
            <p className="eyebrow">Engineering Case Study</p>
            <h3>More than a dashboard.</h3>
          </div>

          <div className="smartmoney-story-copy">
            <p>{smartMoney.overview}</p>

            <div className="smartmoney-tech">
              {smartMoney.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="smartmoney-engineering">
          {smartMoney.engineering.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <span>{item.number}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="smartmoney-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setExpanded(false)}
              aria-label="Close screenshot"
            >
              <FiX />
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="lightbox-header">
                <div>
                  <span>SmartMoney</span>
                  <strong>{activeScreen.label}</strong>
                </div>

                <small>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(smartMoney.gallery.length).padStart(2, "0")}
                </small>
              </div>

              <img
                src={activeScreen.image}
                alt={`Expanded SmartMoney ${activeScreen.label} interface`}
              />

              <div className="lightbox-navigation">
                <button type="button" onClick={showPrevious}>
                  <FiChevronLeft />
                  Previous
                </button>

                <p>{activeScreen.description}</p>

                <button type="button" onClick={showNext}>
                  Next
                  <FiChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SmartMoneyShowcase;
