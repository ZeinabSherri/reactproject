import "../App.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="card bg-primary text-white ">
      <img src="../43.jpg" className="card-img " alt="..." />
  <div className="card-img-overlay mt-5">
  <h1>Welcome to <span class="badge bg-secondary mt-5  ">MovieCom</span></h1>
    <p className="card-text text-xl-start ">Millions of movies,
     TV shows and people to discover. Explore now.</p>
  
</div>
</div>
<section className="inner_content trending no_pad">
  <div className="column_wrapper">
    <div className="content_wrapper wrap no_bottom_pad">

      <div className="column">
        <div className="column_header">
          <h2>Trending</h2>

          <div className="selector_wrap">
            <div className="selector">
              <div className="anchor selected">
                <h3>
                  <Link to="got" className="no_click" data-panel="trending_scroller" data-group="today">
                    Today
                   <span className="glyphicons_v2 chevron-down"></span>
                   </Link>
                   </h3>
                <div className="background"></div>
              </div>

              <div className="anchor">
                <h3><Link to="got" className="no_click" data-panel="trending_scroller" data-group="this-week">This Week <span className="glyphicons_v2 chevron-down"></span></Link></h3>
              </div>
            </div>
          </div>
        </div>

        <div id="trending_scroller" className="media discover scroller_wrap should_fade is_fading">
          <div className="column_content flex scroller loaded" >      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/713704" title="Evil Dead Rise">
              <img loading="lazy" className="poster" src="./edr.jpg" srcset="./edr.jpg 1x, ./edr.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="713704" data-object-id="5ede7c3eb422420020948f99" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5ede7c3eb422420020948f99" data-percent="72.0" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r72"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/713704" title="Evil Dead Rise">Evil Dead Rise</Link></h2>
    <p>Apr 12, 2023</p>
  </div>

  <div className="hover 713704"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/882569" title="Guy Ritchie's The Covenant">
              <img loading="lazy" className="poster" src="./grt.jpg" srcset="./grt.jpg 1x, ./grt.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="882569" data-object-id="6160f356ba131b008d670417" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 6160f356ba131b008d670417" data-percent="76.6" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r77"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/882569" title="Guy Ritchie's The Covenant">Guy Ritchie's <br></br>The Covenant</Link></h2>
    <p>Apr 19, 2023</p>
  </div>

  <div className="hover 882569"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/447365" title="Guardians of the Galaxy Volume 3">
              <img loading="lazy" className="poster" src="./gog.jpg" srcset="./gog.jpg 1x, ./gog.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="447365" data-object-id="58cb3d8d9251415e76005e9c" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 58cb3d8d9251415e76005e9c" data-percent="83.0" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r83"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/447365" title="Guardians of the Galaxy Volume 3">Guardians of <br></br>the Galaxy Volume 3</Link></h2>
    <p>May 03, 2023</p>
  </div>

  <div className="hover 447365"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/493529" title="Dungeons &amp; Dragons: Honor Among Thieves">
              <img loading="lazy" className="poster" src="./dgd.jpg" srcset="./dgd.jpg 1x, ./dgd.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="493529" data-object-id="5a38778c0e0a264cc82048f6" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5a38778c0e0a264cc82048f6" data-percent="75.35" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r75"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/493529" title="Dungeons &amp; Dragons: Honor Among Thieves">Dungeons &amp; Dragons:<br></br> Honor Among Thieves</Link></h2>
    <p>Mar 23, 2023</p>
  </div>

  <div className="hover 493529"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/758323" title="The Pope's Exorcist">
              <img loading="lazy" className="poster" src="./qc.jpg" srcset="./qc.jpg 1x, ./qc.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="758323" data-object-id="5f99a234a1c59d0037a4c496" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5f99a234a1c59d0037a4c496" data-percent="73.8" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r74"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/758323" title="The Pope's Exorcist">The Pope's Exorcist</Link></h2>
    <p>Apr 05, 2023</p>
  </div>

  <div className="hover 758323"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/tv/224387" title="Queen Cleopatra">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/9j0u72TrqdVEFDTj7uG5KOFwbSg.jpg" srcset="/t/p/w220_and_h330_face/9j0u72TrqdVEFDTj7uG5KOFwbSg.jpg 1x, /t/p/w440_and_h660_face/9j0u72TrqdVEFDTj7uG5KOFwbSg.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="224387" data-object-id="64372270aede59009799a57a" data-media-type="tv" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 64372270aede59009799a57a" data-percent="44.0" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r44"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/tv/224387" title="Queen Cleopatra">Queen Cleopatra</Link></h2>
    <p>May 10, 2023</p>
  </div>

  <div className="hover 224387"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/942199" title="Simulant">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/kmDJhZIq1xnu5ZiMOlb0nHJH1qb.jpg" srcset="/t/p/w220_and_h330_face/kmDJhZIq1xnu5ZiMOlb0nHJH1qb.jpg 1x, /t/p/w440_and_h660_face/kmDJhZIq1xnu5ZiMOlb0nHJH1qb.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="942199" data-object-id="62151ce81a32480044578003" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 62151ce81a32480044578003" data-percent="63.0" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r63"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/942199" title="Simulant">Simulant</Link></h2>
    <p>Mar 29, 2023</p>
  </div>

  <div className="hover 942199"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/821890" title="Paint">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/jZ1PhCyXEySYR7f9q52KYb62Bwp.jpg" srcset="/t/p/w220_and_h330_face/jZ1PhCyXEySYR7f9q52KYb62Bwp.jpg 1x, /t/p/w440_and_h660_face/jZ1PhCyXEySYR7f9q52KYb62Bwp.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="821890" data-object-id="60821a5f01b1ca00586bfd08" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 60821a5f01b1ca00586bfd08" data-percent="48.75" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r49"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/821890" title="Paint">Paint</Link></h2>
    <p>Apr 06, 2023</p>
  </div>

  <div className="hover 821890"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/tv/125988" title="Silo">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg" srcset="/t/p/w220_and_h330_face/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg 1x, /t/p/w440_and_h660_face/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="125988" data-object-id="60a69f37b87aec00594bf509" data-media-type="tv" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 60a69f37b87aec00594bf509" data-percent="88.0" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r88"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/tv/125988" title="Silo">Silo</Link></h2>
    <p>May 04, 2023</p>
  </div>

  <div className="hover 125988"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/502356" title="The Super Mario Bros. Movie">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" srcset="/t/p/w220_and_h330_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg 1x, /t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="502356" data-object-id="5a73673492514105a900ee77" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5a73673492514105a900ee77" data-percent="74.93" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r75"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/502356" title="The Super Mario Bros. Movie">The Super Mario <br></br> Bros. Movie</Link></h2>
    <p>Apr 05, 2023</p>
  </div>

  <div className="hover 502356"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/tv/127948" title="className of '09">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/tHA5i8GfQ9qyzDpUJj1upBGu7lt.jpg" srcset="/t/p/w220_and_h330_face/tHA5i8GfQ9qyzDpUJj1upBGu7lt.jpg 1x, /t/p/w440_and_h660_face/tHA5i8GfQ9qyzDpUJj1upBGu7lt.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="127948" data-object-id="60d20bddbf31f2007edeea39" data-media-type="tv" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 60d20bddbf31f2007edeea39" data-percent="87.0" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r87"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/tv/127948" title="className of '09">className of '09</Link></h2>
    <p>May 10, 2023</p>
  </div>

  <div className="hover 127948"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/640146" title="Ant-Man and the Wasp: Quantumania">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg" srcset="/t/p/w220_and_h330_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg 1x, /t/p/w440_and_h660_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="640146" data-object-id="5da88f1370309f00126628e0" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5da88f1370309f00126628e0" data-percent="66.0" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r66"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/640146" title="Ant-Man and the Wasp: Quantumania">Ant-Man and the <br></br>  Wasp:<br></br>  Quantumania</Link></h2>
    <p>Feb 15, 2023</p>
  </div>

  <div className="hover 640146"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/649609" title="Renfield">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg" srcset="/t/p/w220_and_h330_face/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg 1x, /t/p/w440_and_h660_face/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="649609" data-object-id="5dd5d3fcaf85de00137c8673" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5dd5d3fcaf85de00137c8673" data-percent="71.57" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r72"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/649609" title="Renfield">Renfield</Link></h2>
    <p>Apr 07, 2023</p>
  </div>

  <div className="hover 649609"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/tv/194573" title="The Muppets Mayhem">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/fxJrS7cXn5hK09xDuqp7isQOFXX.jpg" srcset="/t/p/w220_and_h330_face/fxJrS7cXn5hK09xDuqp7isQOFXX.jpg 1x, /t/p/w440_and_h660_face/fxJrS7cXn5hK09xDuqp7isQOFXX.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="194573" data-object-id="62262df995acf0004466b7b4" data-media-type="tv" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 62262df995acf0004466b7b4" data-percent="40.0" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r40"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/tv/194573" title="The Muppets Mayhem">The Muppets Mayhem</Link></h2>
    <p>May 10, 2023</p>
  </div>

  <div className="hover 194573"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/tv/196454" title="Queen Charlotte: A Bridgerton Story">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/eR7btjpvOugivUYSoEsD2iAOYsJ.jpg" srcset="/t/p/w220_and_h330_face/eR7btjpvOugivUYSoEsD2iAOYsJ.jpg 1x, /t/p/w440_and_h660_face/eR7btjpvOugivUYSoEsD2iAOYsJ.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="196454" data-object-id="6244b7afbe55b70093124b11" data-media-type="tv" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 6244b7afbe55b70093124b11" data-percent="77.0" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r77"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/tv/196454" title="Queen Charlotte: A Bridgerton Story">Queen Charlotte:<br></br>  A Bridgerton Story</Link></h2>
    <p>May 04, 2023</p>
  </div>

  <div className="hover 196454"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/385687" title="Fast X">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/1E5baAaEse26fej7uHcjOgEE2t2.jpg" srcset="/t/p/w220_and_h330_face/1E5baAaEse26fej7uHcjOgEE2t2.jpg 1x, /t/p/w440_and_h660_face/1E5baAaEse26fej7uHcjOgEE2t2.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="385687" data-object-id="56d8c1c692514162b7008908" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 56d8c1c692514162b7008908" data-percent="1.0" data-track-color="got666666" data-bar-color="gotd4d4d4">
          <div className="percent">
              <span className="icon icon-rNR"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/385687" title="Fast X">Fast X</Link></h2>
    <p>May 17, 2023</p>
  </div>

  <div className="hover 385687"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/1114905" title="Death's Roulette">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg" srcset="/t/p/w220_and_h330_face/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg 1x, /t/p/w440_and_h660_face/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="1114905" data-object-id="643eb4dbd7a70a04b3ab481f" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 643eb4dbd7a70a04b3ab481f" data-percent="66.0" data-track-color="got423d0f" data-bar-color="gotd2d531">
          <div className="percent">
              <span className="icon icon-r66"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/1114905" title="Death's Roulette">Death's Roulette</Link></h2>
    <p>May 05, 2023</p>
  </div>

  <div className="hover 1114905"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/934433" title="Scream VI">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg" srcset="/t/p/w220_and_h330_face/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg 1x, /t/p/w440_and_h660_face/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="934433" data-object-id="61fc14315c3247006da924a3" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 61fc14315c3247006da924a3" data-percent="73.43" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r73"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/934433" title="Scream VI">Scream VI</Link></h2>
    <p>Mar 08, 2023</p>
  </div>

  <div className="hover 934433"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/603692" title="John Wick: Chapter 4">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" srcset="/t/p/w220_and_h330_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg 1x, /t/p/w440_and_h660_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="603692" data-object-id="5ce32ed89251412d00be7e96" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5ce32ed89251412d00be7e96" data-percent="79.2" data-track-color="got204529" data-bar-color="got21d07a">
          <div className="percent">
              <span className="icon icon-r79"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/603692" title="John Wick: Chapter 4">John Wick: Chapter 4</Link></h2>
    <p>Mar 22, 2023</p>
  </div>

  <div className="hover 603692"></div>
</div>
      <div className="card style_1">
  <div className="image">
    <div className="wrapper">
      <Link className="image" to="/movie/615656" title="Meg 2: The Trench">
              <img loading="lazy" className="poster" src="/t/p/w220_and_h330_face/uvYbo4eF3q6W06kpx5iDwC4jt6N.jpg" srcset="/t/p/w220_and_h330_face/uvYbo4eF3q6W06kpx5iDwC4jt6N.jpg 1x, /t/p/w440_and_h660_face/uvYbo4eF3q6W06kpx5iDwC4jt6N.jpg 2x" alt=""/>

      </Link>
    </div>
    <div className="options" data-id="615656" data-object-id="5d2c096ab84f9400144a86fb" data-media-type="movie" data-role="tooltip">
      <Link className="no_click" to="got"><div className="glyphicons_v2 circle-more white"></div></Link>
    </div>
  </div>
  <div className="content">
    <div className="consensus tight">
      <div className="outer_ring">
        <div className="user_score_chart 5d2c096ab84f9400144a86fb" data-percent="0.0" data-track-color="got666666" data-bar-color="gotd4d4d4">
          <div className="percent">
              <span className="icon icon-rNR"><i class="fa-regular fa-star fa-2xl"></i></span>
          </div>
        <canvas height="34" width="34"></canvas></div>
      </div>
    </div>

    <h2><Link to="/movie/615656" title="Meg 2: The Trench">Meg 2: The Trench</Link></h2>
    <p>Aug 02, 2023</p>
  </div>

  <div className="hover 615656"></div>
</div>
  <div className="card style_1 spacer"></div>

</div>
        </div>
      </div>

    </div>
  </div>
</section>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
        <div className="col">
          <div className="card h-100">
            <img src="../f10.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fast & Furious X</h5>
              <p className="card-text">
               Movie
              </p>
            </div>
            
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="../m2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Murder  Mystery</h5>
              <p className="card-text">
               Movie
              </p>
            </div>
           
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="../a2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Avatar 2</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <footer class="single_column  ">
      <nav>
        <div class="join">
          <img src="../2.png" width="130" height="94" alt="..." />
          
          <br> 
          </br>
          
            <a class="rounded logged_in" href="/u/zeinabsherri">Hi zeinabsherri!</a>
        </div>

        <div>
          <h3>The Basics</h3>
          <ul>
            <li><a href="/about">About TMDB</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
              <li><a href="/login?to=read_me&amp;redirect_uri=/docs" target="_blank">API</a></li>
            <li><a href="https://status.themoviedb.org/" target="#" rel="noopener">System Status</a></li>
          </ul>
        </div>
        <div>
          <h3>Get Involved</h3>
          <ul>
            <li><a href="/bible"><span class="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/discuss">Discussions</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="https://twitter.com/themoviedb" target="#" rel="noopener">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/documentation/api/terms-of-use">API Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>

      <section>Build f9a7aba (5460)</section>
    </footer>

    </>
  );
};

export default Home;
