import React, { Component } from "react";
import Post1 from "../../images/post_1.png";
import Post2 from "../../images/post_2.png";

export default class PostHeader extends Component {
  render() {
    let imgStyle = {
      border: "1px #f2f2f2 solid",
      boxShadow: "2px 4px 25px rgba(0, 0, 0, 0.15)"
    };
    return (
      <>
        <div className="post">
          <p>
            React doesn't come with a built-in router, but we can easily achieve
            routing with the <code class="language-text">react-router-dom</code>{" "}
            library. <strong>Routing</strong> is how a web applications direct
            traffic. (If you know what routing is, feel free to skip this
            section.)
          </p>
          <p>
            Example: If you go to <a href="/">zijinchen.com</a>, you end up on
            my home page. If you go to <a href="/me">zijinchen.com/me</a>,
            you're redirected to my about me page. If you go to{" "}
            <a href="/categories/javascript">
              zijinchen.com/categories/javascript
            </a>{" "}
            or <a href="/categories/css">zijinchen.com/categories/css</a>, you
            end up on a category listing page. The routes for these pages look
            something like this:
          </p>
          <ul>
            <li>
              <code class="language-text">/</code> - root
            </li>
            <li>
              <code class="language-text">/:page_id</code> - page
            </li>
            <li>
              <code class="language-text">/categories/:category_id</code> -
              category
            </li>
          </ul>
          <p>
            I'm not actually making a folder called{" "}
            <code class="language-text">categories</code> and filling it with a
            bunch of files like{" "}
            <code class="language-text">javascript.html</code> or{" "}
            <code class="language-text">css.html</code>, I just have one
            template and the router knows to direct to the proper template. Once
            it gets to the template, it can pull from the URL to know which
            variables to display - for example, JavaScript or CSS related posts.
          </p>
          <p>
            This website also happens to be a{" "}
            <strong>Single Page Application</strong> (or SPA) - only one page is
            loaded, and every click to a new page loads some additional JSON
            data, but does not actually request a new resource like loading{" "}
            <code class="language-text">index.html</code> and{" "}
            <code class="language-text">about-me.html</code> would.
          </p>
          <p>
            I'm going to show you how to set up a simple SPA in React with{" "}
            <code class="language-text">react-router-dom</code>, and pull in
            data dynamically through the URL. Below is the source of the
            completed project if you get lost along the way.
          </p>
          <h2>Installation</h2>
          <p>Create a new React app.</p>
          <div class="gatsby-highlight" data-language="bash">
            <pre class="language-bash">
              <code class="language-bash">
                npx create-react-app router-example
              </code>
            </pre>
          </div>
          <p>
            Our project has two dependencies -{" "}
            <code class="language-text">react-router-dom</code> for the router,
            and <code class="language-text">axios</code> for making API calls.
          </p>
          <div class="gatsby-highlight" data-language="bash">
            <pre class="language-bash">
              <code class="language-bash">
                <span class="token function">npm</span>{" "}
                <span class="token function">install</span> react-router-dom
                axios
              </code>
            </pre>
          </div>
          <p>or</p>
          <div class="gatsby-highlight" data-language="bash">
            <pre class="language-bash">
              <code class="language-bash">
                <span class="token function">yarn</span>{" "}
                <span class="token function">add</span> react-router-dom axios
              </code>
            </pre>
          </div>
          <h2>Browser Router</h2>
          <p>
            To use <code class="language-text">react-router-dom</code>, we need
            to wrap our entire <code class="language-text">App</code> component
            in{" "}
            <a href="https://reacttraining.com/react-router/web/api/BrowserRouter">
              <code class="language-text">BrowserRouter</code>
            </a>
            . There are two types of routers:
          </p>

          <ul>
            <li>
              <code class="language-text">BrowserRouter</code> - makes pretty
              URLs like <code class="language-text">example.com/about</code>.
            </li>
            <li>
              <code class="language-text">HashRouter</code> - makes URLs with
              the octothorpe (or hashtag, if you will) that would look like{" "}
              <code class="language-text">example.com/#about</code>.
            </li>
          </ul>
          <p>
            Let's use <code class="language-text">BrowserRouter</code>.
          </p>
          <div class="filename">src/index.js</div>
          <div class="gatsby-highlight" data-language="jsx">
            <pre class="language-jsx">
              <code class="language-jsx">
                <span class="token keyword">import</span> React
                <span class="token keyword"> from</span>
                <span class="token string"> 'react'</span>
                <br />
                <span class="token keyword">import</span>
                <span class="token punctuation"> {`{`} </span> render
                <span class="token punctuation"> {`}`}</span>
                <span class="token keyword">from</span>
                <span class="token string">'react-dom'</span>
                <br />
                <span class="token keyword">import</span>
                <span class="token punctuation">{`{`}</span> BrowserRouter{" "}
                <span class="token punctuation">{`}`}</span>{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'react-router-dom'</span>
                <br />
                <span class="token keyword">import</span> App{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'./App'</span>
                <br />
                <span class="token function">render</span>
                <span class="token punctuation">(</span>
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>
                    <span class="token class-name">BrowserRouter</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">App</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>
                    <span class="token class-name">BrowserRouter</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">,</span>
                <br />
                document<span class="token punctuation">.</span>
                <span class="token function">querySelector</span>
                <span class="token punctuation">(</span>
                <span class="token string">'#root'</span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
              </code>
            </pre>
          </div>
          <h2>Route and Switch</h2>
          <p>
            Now in <code class="language-text">App.js</code>, we can decide on
            the routes we want to use and direct accordingly. We'll use{" "}
            <code class="language-text">Route</code> and{" "}
            <code class="language-text">Switch</code> for this task.
          </p>
          <ul>
            <li>
              <code class="language-text">Switch</code> - Groups all your routes
              together, and ensures they take precedence from top-to-bottom.
            </li>
            <li>
              <code class="language-text">Route</code> - Each individual route.
            </li>
          </ul>
          <div class="filename">App.js</div>
          <div class="gatsby-highlight" data-language="jsx">
            <pre class="language-jsx">
              <code class="language-jsx">
                <span class="token keyword">import</span> React
                <span class="token keyword">from</span>
                <span class="token string">'react'</span>
                <br />
                <span class="token keyword">import</span>
                <span class="token punctuation">{`{`}</span> Route
                <span class="token punctuation">,</span> Switch{" "}
                <span class="token punctuation">{`}`}</span>
                <span class="token keyword">from</span>{" "}
                <span class="token string">'react-router-dom'</span>
                <br />
                <span class="token comment">
                  {"// We will create these two pages in a moment"}
                </span>
                <br />
                <span class="token keyword">import</span> HomePage
                <span class="token keyword">from</span>
                <span class="token string">'./pages/HomePage'</span>
                <br />
                <span class="token keyword">import</span> UserPage
                <span class="token keyword">from</span>
                <span class="token string">'./pages/UserPage'</span>
                <br />
                <span class="token keyword">export</span>
                <span class="token keyword"> default</span>
                <span class="token keyword"> function</span>
                <span class="token function"> App</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>{" "}
                <span class="token punctuation">{`{`}</span>
                <br />
                <span class="token keyword">return</span>
                <span class="token punctuation">(</span>
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>
                    <span class="token class-name">Switch</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">exact</span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>HomePage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/:id
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>UserPage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>
                    <span class="token class-name">Switch</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              </code>
            </pre>
          </div>
          <p>
            We're matching the root route (<code class="language-text">/</code>)
            to <code class="language-text">HomePage</code>, and dynamically
            matching any other page to{" "}
            <code class="language-text">UserPage</code>. I only have one route
            for this simple example, but you could do more like this:
          </p>
          <div class="gatsby-highlight" data-language="jsx">
            <pre class="language-jsx">
              <code class="language-jsx">
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>
                    <span class="token class-name">Switch</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">exact</span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>HomePage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/:id
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>UserPage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/categories
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>CategoriesPage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&nbsp;&nbsp;&lt;</span>
                    <span class="token class-name">Route</span>
                  </span>{" "}
                  <span class="token attr-name">path</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/categories/:id
                    <span class="token punctuation">"</span>
                  </span>{" "}
                  <span class="token attr-name">component</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>
                    IndividualCategoryPage
                    <span class="token punctuation">{`}`}</span>
                  </span>{" "}
                  <span class="token punctuation">/&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>
                    <span class="token class-name">Switch</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
              </code>
            </pre>
          </div>
          <p>
            This would ensure that{" "}
            <code class="language-text">zijinchen.com/categories</code> would go
            to a page listing all categories, but{" "}
            <code class="language-text">
              zijinchen.com/categories/javascript
            </code>{" "}
            would go to a completely different template for the inidiviual
            category listing.
          </p>
          <h2>Link</h2>
          <p>
            In order to link to a page within the SPA, we'll use{" "}
            <a href="https://reacttraining.com/react-router/web/api/Link">
              <code class="language-text">Link</code>
            </a>
            . If we used the traditional{" "}
            <code class="language-text">&lt;a href="/route"&gt;</code>, it would
            make a completely new request and reload the page, so we have{" "}
            <code class="language-text">Link</code> to help us out.
          </p>
          <div class="filename">src/pages/HomePage.js</div>
          <div class="gatsby-highlight" data-language="jsx">
            <pre class="language-jsx">
              <code class="language-jsx">
                <span class="token keyword">import</span> React
                <span class="token punctuation">,</span>{" "}
                <span class="token punctuation">{`{`}</span> Component{" "}
                <span class="token punctuation">{`}`}</span>{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'react'</span>
                <br />
                <span class="token keyword">import</span>{" "}
                <span class="token punctuation">{`{`}</span> Link{" "}
                <span class="token punctuation">{`}`}</span>{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'react-router-dom'</span>
                <br />
                <br />
                <span class="token keyword">export</span>{" "}
                <span class="token keyword">default</span>{" "}
                <span class="token keyword">function</span>{" "}
                <span class="token function">HomePage</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">{`{`}</span>
                <br />
                <span class="token keyword">{"  "}return</span>{" "}
                <span class="token punctuation">(</span>
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">{"  "}&lt;</span>div
                  </span>{" "}
                  <span class="token attr-name">className</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>container
                    <span class="token punctuation">"</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">{"    "}&lt;</span>h1
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Home Page</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>h1
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">{"    "}&lt;</span>p
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>
                    <span class="token class-name">Link</span>
                  </span>{" "}
                  <span class="token attr-name">to</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>/zijinchen
                    <span class="token punctuation">"</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">zijinchen</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>
                    <span class="token class-name">Link</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text"> on GitHub.</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>p
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">{"  "}&lt;/</span>div
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">{`}`}</span>
              </code>
            </pre>
          </div>
          <p>
            So now I'm going to my first route, the root route which is loading{" "}
            <code class="language-text">HomePage</code>, and I see the content
            and the link.
          </p>
          <img src={Post1} alt="post1" style={imgStyle} />
          <h2>Dynamic Route Parameter</h2>
          <p>
            Our <code class="language-text">Link</code> is navigating to{" "}
            <code class="language-text">/zijinchen</code>, which will match the{" "}
            <code class="language-text">/:id</code> parameter in{" "}
            <code class="language-text">Route</code>. In order to dynamically
            get the content from the URL - in this case,{" "}
            <code class="language-text">zijinchen</code> - we'll use{" "}
            <code class="language-text">match.params.id</code> from the{" "}
            <code class="language-text">props</code>.
          </p>
          <p>
            I'm going to use that parameter to make a call to the GitHub API and
            retrieve my data. In this example I'll be using Hooks, so if you're
            not familiar with them, please read{" "}
            <a href="https://reactjs.org/docs/hooks-intro.html" target="blank">
              Introduction Hooks
            </a>
            ,{"  "}
            <a href="https://github.com/axios/axios" target="blank">
              Introduction Axios
            </a>
            .
          </p>
          <div class="filename">src/pages/UserPage.js</div>
          <div class="gatsby-highlight" data-language="jsx">
            <pre class="language-jsx">
              <code class="language-jsx">
                <span class="token keyword">import</span> React
                <span class="token punctuation">,</span>{" "}
                <span class="token punctuation">{`{`}</span> useState
                <span class="token punctuation">,</span> useEffect{" "}
                <span class="token punctuation">{`}`}</span>{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'react'</span>
                <br />
                <span class="token keyword">import</span> axios{" "}
                <span class="token keyword">from</span>{" "}
                <span class="token string">'axios'</span>
                <br />
                <br />
                <span class="token keyword">export</span>{" "}
                <span class="token keyword">default</span>{" "}
                <span class="token keyword">function</span>{" "}
                <span class="token function">UserPage</span>
                <span class="token punctuation">(</span>
                <span class="token parameter">props</span>
                <span class="token punctuation">)</span>{" "}
                <span class="token punctuation">{`{`}</span>
                <br />
                {"  "}
                <span class="token comment">{"// Setting initial state"}</span>
                <br />
                {"  "}
                <span class="token keyword">const</span> initialUserState{" "}
                <span class="token operator">=</span>{" "}
                <span class="token punctuation">{`{`}</span>
                user<span class="token punctuation">:</span>{" "}
                <span class="token punctuation">{`{`}</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">,</span>
                loading<span class="token punctuation">:</span>{" "}
                <span class="token boolean">true</span>
                <span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
                <br />
                {"  "}
                <span class="token comment">
                  {"// Getter and setter for user state"}
                </span>
                <br />
                {"  "}
                <span class="token keyword">const</span>{" "}
                <span class="token punctuation">[</span>user
                <span class="token punctuation">,</span> setUser
                <span class="token punctuation">]</span>{" "}
                <span class="token operator">=</span>{" "}
                <span class="token function">useState</span>
                <span class="token punctuation">(</span>initialUserState
                <span class="token punctuation">)</span>
                <br />
                {"  "}
                <span class="token comment">
                  {
                    "// Using useEffect to retrieve data from an API (similar to componentDidMount in a class)"
                  }
                </span>
                <br />
                {"  "}
                <span class="token function">useEffect</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>{" "}
                <span class="token operator">=&gt;</span>{" "}
                <span class="token punctuation">{`{`}</span>
                <span class="token keyword">const</span>{" "}
                <span class="token function-variable function">getUser</span>{" "}
                <span class="token operator">=</span>{" "}
                <span class="token keyword">async</span>{" "}
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>{" "}
                <span class="token operator">=&gt;</span>{" "}
                <span class="token punctuation">{`{`}</span>
                <br />
                {"  "}
                <span class="token comment">
                  {"// Pass our param (:id) to the API call"}
                </span>
                <br />
                {"  "}
                <span class="token keyword">const</span>{" "}
                <span class="token punctuation">{`{`}</span> data{" "}
                <span class="token punctuation">}</span>{" "}
                <span class="token operator">=</span>{" "}
                <span class="token keyword">await</span>{" "}
                <span class="token function">axios</span>
                <span class="token punctuation">(</span>
                <span class="token template-string">
                  <span class="token string">
                    `https://api.github.com/users/
                  </span>
                  <span class="token interpolation">
                    <span class="token interpolation-punctuation punctuation">
                      ${`{`}
                    </span>
                    props<span class="token punctuation">.</span>match
                    <span class="token punctuation">.</span>params
                    <span class="token punctuation">.</span>id
                    <span class="token interpolation-punctuation punctuation">
                      }
                    </span>
                  </span>
                  <span class="token string">`</span>
                </span>
                <span class="token punctuation">)</span>
                <br />
                {"  "}
                <span class="token comment">{"// Update state"}</span>
                <br />
                {"  "}
                <span class="token function">setUser</span>
                <span class="token punctuation">(</span>data
                <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <br />
                {"  "}
                <span class="token comment">
                  {"// Invoke the async function"}
                </span>
                <br />
                {"  "}
                <span class="token function">getUser</span>
                <span class="token punctuation">(</span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">,</span>{" "}
                <span class="token punctuation">[</span>
                <span class="token punctuation">]</span>
                <span class="token punctuation">)</span>
                <br />
                {"  "}
                <span class="token comment">
                  {
                    "// Don't forget the `[]`, which will prevent useEffect from running in an infinite loop"
                  }
                </span>
                <br />
                {"  "}
                <span class="token comment">
                  {"// Return a table with some data from the API."}
                </span>
                <br />
                {"  "}
                <span class="token keyword">return</span> user
                <span class="token punctuation">.</span>loading{" "}
                <span class="token operator">?</span>
                <span class="token punctuation">(</span>
                <br />
                {"    "}
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>div
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Loading...</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>div
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"    "}
                <span class="token punctuation">)</span>{" "}
                <span class="token punctuation">:</span>{" "}
                <span class="token punctuation">(</span>
                <br />
                {"    "}
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>div
                  </span>{" "}
                  <span class="token attr-name">className</span>
                  <span class="token attr-value">
                    <span class="token punctuation">=</span>
                    <span class="token punctuation">"</span>container
                    <span class="token punctuation">"</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text" />
                <br />
                {"    "}
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>h1
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">{`{`}</span>props
                <span class="token punctuation">.</span>match
                <span class="token punctuation">.</span>params
                <span class="token punctuation">.</span>id
                <span class="token punctuation">}</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>h1
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"    "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>table
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"      "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>thead
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"        "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>tr
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Name</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Location</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Website</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token plain-text">Followers</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>th
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"        "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>tr
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"      "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>thead
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"      "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>tbody
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"        "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>tr
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">{`{`}</span>user
                <span class="token punctuation">.</span>name
                <span class="token punctuation">}</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">{`{`}</span>user
                <span class="token punctuation">.</span>location
                <span class="token punctuation">}</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"            "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>a
                  </span>{" "}
                  <span class="token attr-name">href</span>
                  <span class="token script language-javascript">
                    <span class="token script-punctuation punctuation">=</span>
                    <span class="token punctuation">{`{`}</span>user
                    <span class="token punctuation">.</span>blog
                    <span class="token punctuation">}</span>
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">{`{`}</span>user
                <span class="token punctuation">.</span>blog
                <span class="token punctuation">}</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>a
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"          "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">{`{`}</span>user
                <span class="token punctuation">.</span>followers
                <span class="token punctuation">}</span>
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>td
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"        "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>tr
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"      "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>tbody
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"    "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>table
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <br />
                {"    "}
                <span class="token plain-text" />
                <span class="token tag">
                  <span class="token tag">
                    <span class="token punctuation">&lt;/</span>div
                  </span>
                  <span class="token punctuation">&gt;</span>
                </span>
                <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              </code>
            </pre>
          </div>
          <img src={Post2} alt="post2" style={imgStyle} />
          <h2>Conclusion</h2>
          <p>
            If you got lost anywhere along the way, view the source on GitHub.
          </p>
          <ul>
            <li>
              <a href="https://github.com/zijinchen/router-example">
                View Source
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
