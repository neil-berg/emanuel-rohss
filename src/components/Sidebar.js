import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;

  .content {
    flex: 1;
    background: papayawhip;
    max-width: ${props => (props.isSidebarOpen ? `100%` : `0px`)};
    min-width: ${props => (props.isSidebarOpen ? `calc(100vw - 50px)` : `0px`)};
    overflow: hidden;
    opacity: ${props => (props.isSidebarOpen ? "1" : "0")};
    transition: all 0.3s linear;
    overflow-y: scroll;
  }

  .content__solo,
  .content__education,
  .content__contact {
    font-size: 0.85em;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
  }

  .content__contact {
    display: flex;
    align-items: center;
  }

  .content__solo-header--big,
  .content__education-header--big {
    font-size: 1.5em;
    border-bottom: 1px grey solid;
    margin-bottom: 1rem;
  }

  .content__solo-header--small {
    font-size: 1.15em;
    margin: 0;
  }

  .content__solo-list-item,
  .content__education-list-item {
    margin: 0;
    padding: 0;
  }

  .content__solo-list-item-link {
    text-decoration: none;
    color: blue;
  }

  .clickbar {
    background: #002b72;
    color: white;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clickbar__text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 1.35em;
  }
`

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <main className="content">
        <div className="content__contact">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <a
            href="mailto:emanuel.rohss@gmail.com "
            style={{ marginLeft: "1rem", fontSize: "1.2em" }}
          >
            emanuel.rohss@gmail.com{" "}
          </a>
        </div>
        <div className="content__solo">
          <h1 className="content__solo-header--big">Solo</h1>
          <h2 className="content__solo-header--small">2018</h2>
          <ul className="content__solo-list">
            <li className="content__solo-list-item">
              <a href="" className="content__solo-list-item-link">
                In Broad Daylight
              </a>
              , Issues Gallery, Stockholm, SE{" "}
            </li>
            <li>
              <a href="" className="content__solo-list-item-link">
                Out Of Joint
              </a>
              , 818 N Spring Steeet, Los Angeles, CA
            </li>
          </ul>
          <h2 className="content__solo-header--small">2017</h2>
          <ul>
            <li className="content__solo-list-item">
              <a
                href="
              "
                className="content__solo-list-item-link"
              >
                End Frames
              </a>
              , Coma Gallery, Sydney, AU
            </li>
            <li className="content__solo-list-item">
              <a
                href="
              "
                className="content__solo-list-item-link"
              >
                The Thatch of The Roof And/Or How to Divide a Room In Two
              </a>
              , (with Mateo Tannatt), Salon Kennedy, Frankfurt, DE{" "}
            </li>
          </ul>
        </div>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
        <section className="content__education">
          <h1 className="content__education-header--big">Education</h1>
          <ul className="content__education-list">
            <li className="content__education-list-item">
              MFA, 2013, Royal College of Arts, London, UK, (Painting)
            </li>
            <li className="content__education-list-item">
              BFA, 2011, National College of Art & Design, Dublin, IRL,
              (Painting)
            </li>
            <li className="content__education-list-item">
              BA, 2010 Valand Academy, Gothenburg, SE, (Fine Art)
            </li>
          </ul>
        </section>
      </main>
      <div
        className="clickbar"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <p className="clickbar__text">Emanuel Röhss</p>
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
