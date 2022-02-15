import logo from "./logo.svg";
import "./App.css";

import nearlogo from "./assets/img/logo.svg";
import rareNearLight from "./assets/img/HowRare-near-light.svg";
import rareNearDark from "./assets/img/HowRare-near-dark.svg";
import flameSmall from "./assets/img/flame-small.svg";
import lightning from "./assets/img/lightning.svg";
import twitter from "./assets/img/twitter.svg";
import discord from "./assets/img/discord.svg";
import faq from "./assets/img/FAQ.svg";

function App() {
  return (
    <div className="App">
      <div id="overlay" className="overlay">
        {/* <!-- Modal content --> */}
        <div className="overlay-content">
          <div className="overlay-header">
            <span className="overlay-close">&times;</span>
            <h2>Overlay Header</h2>
          </div>
          <div className="overlay-body">
            <p>Some text in the overlay body</p>
            <p>Some other text...</p>
          </div>
          <div className="overlay-footer">
            <h3>Overlay Footer</h3>
          </div>
        </div>
      </div>
      <input
        type="hidden"
        name="_token"
        value="LGtcDHgv3JBNo4hhy0KEreUq7q1Z2WS3m1yAarUF"
      />{" "}
      <div className="header">
        <div className="wrap">
          <div className="trigger">
            <span></span>
          </div>
          <div className="logo_holder">
            <div className="logo">
              <a href="https://howrare.xyz">
                <img
                  className="dark_logo"
                  src={rareNearLight}
                  height="50"
                  alt="img"
                />
                <img
                  className="light_logo"
                  src={rareNearDark}
                  height="50"
                  alt="img"
                />
              </a>
            </div>
            <a href="https://howrare.xyz/drops" className="butt">
              <img src={flameSmall} height="14px" alt="img" /> upcoming drops
            </a>
          </div>
          <div className="search">
            <form id="search-form">
              <input
                type="text"
                id="search-collections"
                autocomplete="off"
                style={{
                  position: "absolute",
                  zIndex: "2",
                  background: "transparent",
                }}
                placeholder="Search by name or address"
              />
              <input type="submit" />
            </form>
            <div id="search-suggestions"></div>
          </div>
          <div className="header_right">
            <div className="social">
              <a href="https://howrare.xyz/faq" className="faq"></a>
              <a href="https://twitter.com/HowRareNear" className="twitter"></a>
              <a href="https://discord.gg/VmhsCdjyEx" className="discord"></a>
              <a href="#" className="daynight"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap content page">
        <div className="title">
          <h1>
            Find out <strong>How</strong>
            <em>Rare</em> your Near{" "}
            <span className="eth_icon">
              <img src={nearlogo} height="30px" alt="Near Protocol" />
            </span>{" "}
            NFTs are
          </h1>
        </div>

        <div className="featured">
          <h2>
            <img src={lightning} height="24" alt="img" /> Featured
          </h2>
          <div className="featured_items">
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/degenlizard.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafybeif7nzjivk6tbivf5svijph6hoxzlepaiooyhbkgicvm3agfkvlcfq?w=800"
                    alt="DEGEN Lizards"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>DEGEN Lizards</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      9.8
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>1.82K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/kokumokongz.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafkreiaboggro5ri5eeujb6xzyjbwe45q4w2cp7o3pg5uvjtic6lllkx2i?w=800"
                    alt="Kokumo KongZ"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>Kokumo KongZ</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      2.5
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>12.34K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/dinotroop.neartopia.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafybeigomvelctl3jngqkmkqcjxmowr3bznmafsjkivemf5hxhkfmgjhw4?w=800"
                    alt="Dino Troop"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>Dino Troop</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      4.8
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>1.62K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/near-punks.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafybeia7w5fcfesqb6caphdcrehyqw2ewujsy7d3z7nivjc4wyjz6dvumm?w=800"
                    alt="NPunks"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>NPunks</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      8.9
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>14.2K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/nagmi.oldmantrader.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafkreigmwygmtqowjd7qplkua2jz7w46vtctub5c24qrajf7p53chu3eaq?w=800"
                    alt="NAGMI"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>NAGMI</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      35
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>13.48K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/uglyapes.neartopia.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafkreig6smsxcmo4smdbtiqehdy74mati53pav3fon6ynfu7kixg6i7wxm?w=800"
                    alt="Ugly Apes Society"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>Ugly Apes Society</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      2.59
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>7.18K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/classykangaroos1.near">
                  <img
                    src="https://paras-cdn.imgix.net/bafybeid5nkfzgraidlmreqr2zxyvfgwjkexm7rcn3vr3c4spx3hsvdvmvi?w=800"
                    alt="Classy Kangaroos"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>Classy Kangaroos</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      59
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>6.88K</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_item">
              <div className="featured_item_img">
                <a href="https://howrare.xyz/mrbrownproject.near">
                  <img
                    src="https://pbs.twimg.com/profile_images/1470449388224860164/fbRSley-_400x400.jpg"
                    alt="Mr. Brown"
                  />
                </a>
              </div>
              <div className="featured_image_desc">
                <h3>Mr. Brown</h3>
                <div className="item_stats">
                  <div className="item_stat">
                    floor price
                    <span>
                      <img src={nearlogo} height="10px" alt="near protocol" />{" "}
                      1.1
                    </span>
                  </div>
                  <div className="item_stat">
                    volume<span>24.71K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="all_collections_wrap">
          <div className="holder">
            <h2 id="all">All collections</h2>

            <div className="stats_holder">
              <div className="stats">
                <div className="stat">
                  <span>15</span>collections
                </div>
                <div className="stat">
                  <span>44.13K</span>items
                </div>
                <div className="stat">
                  <span>NEAR 303.5K</span>volume
                </div>
              </div>
            </div>
          </div>

          <div className="all_collections">
            <div className="all_coll_row table_top">
              <div className="all_coll_col">
                <a href="?sortBy=name&sort=asc#all">Name</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=floor_price&sort=desc#all">Floor price</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=supply&sort=desc#all">Items</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=num_owners&sort=desc#all">Owners</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=total_volume&sort=desc#all">Daily volume</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=average_price&sort=desc#all">Avg. price</a>
              </div>
              <div className="all_coll_col">
                <a href="?sortBy=market_cap&sort=asc#all">
                  <span className="sort_table up">Market cap</span>
                </a>
              </div>
            </div>
            <div className="collection-pagination" data-page="index">
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/asac.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeigc6z74rtwmigcoo5eqcsc4gxwkganqs4uq5nuz4dwlhjhrurofeq?w=800"
                      alt="Antisocial Ape Club"
                    />
                    <span>Antisocial Ape Club</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  110.9
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">3.33K</div>
                <div className="all_coll_col">1.37K</div>
                <div className="all_coll_col">114.2K</div>
                <div className="all_coll_col">61.79</div>
                <div className="all_coll_col coll_sortable">4.58M USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/secretskelliessociety.near">
                    <img
                      src="https://pbs.twimg.com/profile_images/1482156587276017666/TWkv7DTe_400x400.jpg"
                      alt="Secret Skellies Society"
                    />
                    <span>Secret Skellies Society</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  375
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">778</div>
                <div className="all_coll_col">421</div>
                <div className="all_coll_col">25.08K</div>
                <div className="all_coll_col">81.14</div>
                <div className="all_coll_col coll_sortable">3.62M USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/misfits.tenk.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeighkt34sd4macaotpgfkyzdcm4xl6ghon3mxxfamrkv3vhoenor5u?w=800"
                      alt="Near Misfits"
                    />
                    <span>Near Misfits</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  59
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">1.84K</div>
                <div className="all_coll_col">886</div>
                <div className="all_coll_col">30.47K</div>
                <div className="all_coll_col">50.29</div>
                <div className="all_coll_col coll_sortable">1.34M USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/near-punks.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeia7w5fcfesqb6caphdcrehyqw2ewujsy7d3z7nivjc4wyjz6dvumm?w=800"
                      alt="NPunks"
                    />
                    <span>NPunks</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  8.9
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">9.67K</div>
                <div className="all_coll_col">1.97K</div>
                <div className="all_coll_col">14.2K</div>
                <div className="all_coll_col">18.25</div>
                <div className="all_coll_col coll_sortable">1.07M USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/classykangaroos1.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeid5nkfzgraidlmreqr2zxyvfgwjkexm7rcn3vr3c4spx3hsvdvmvi?w=800"
                      alt="Classy Kangaroos"
                    />
                    <span>Classy Kangaroos</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  59
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">550</div>
                <div className="all_coll_col">279</div>
                <div className="all_coll_col">6.88K</div>
                <div className="all_coll_col">40.31</div>
                <div className="all_coll_col coll_sortable">402.7K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/nmkmint.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafkreifa2m5phwxxyyqapzlgcdr7c26rot4r6jm6dqgityc2nkb5tsvceq?w=800"
                      alt="NEAR Meerkat Kingdom"
                    />
                    <span>NEAR Meerkat Kingdom</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  4.9
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">5K</div>
                <div className="all_coll_col">1.61K</div>
                <div className="all_coll_col">20.29K</div>
                <div className="all_coll_col">10.04</div>
                <div className="all_coll_col coll_sortable">304.05K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/dragonnation.near">
                    <img
                      src="https://paras-cdn.imgix.net/2ecb06e0c99e740a106867fcacc071c3ac7fd4a5?w=800"
                      alt="Near Dragon Nation"
                    />
                    <span>Near Dragon Nation</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  8
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">3K</div>
                <div className="all_coll_col">1.06K</div>
                <div className="all_coll_col">8.3K</div>
                <div className="all_coll_col">6.96</div>
                <div className="all_coll_col coll_sortable">297.84K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/tigeracademy.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeie7awzus77lp6e5nstcr4wzojfpsqjiu7lrvtvsfxfx57ux2nswd4?w=800"
                      alt="Near Tiger Academy"
                    />
                    <span>Near Tiger Academy</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  11.1
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">2K</div>
                <div className="all_coll_col">735</div>
                <div className="all_coll_col">9.11K</div>
                <div className="all_coll_col">17.46</div>
                <div className="all_coll_col coll_sortable">274.81K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/nagmi.oldmantrader.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafkreigmwygmtqowjd7qplkua2jz7w46vtctub5c24qrajf7p53chu3eaq?w=800"
                      alt="NAGMI"
                    />
                    <span>NAGMI</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  35
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">499</div>
                <div className="all_coll_col">302</div>
                <div className="all_coll_col">13.48K</div>
                <div className="all_coll_col">45.43</div>
                <div className="all_coll_col coll_sortable">216.74K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/kokumokongz.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafkreiaboggro5ri5eeujb6xzyjbwe45q4w2cp7o3pg5uvjtic6lllkx2i?w=800"
                      alt="Kokumo KongZ"
                    />
                    <span>Kokumo KongZ</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  2.5
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">5K</div>
                <div className="all_coll_col">2.1K</div>
                <div className="all_coll_col">12.34K</div>
                <div className="all_coll_col">6.08</div>
                <div className="all_coll_col coll_sortable">155.09K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/degenlizard.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeif7nzjivk6tbivf5svijph6hoxzlepaiooyhbkgicvm3agfkvlcfq?w=800"
                      alt="DEGEN Lizards"
                    />
                    <span>DEGEN Lizards</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  9.8
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">1K</div>
                <div className="all_coll_col">482</div>
                <div className="all_coll_col">1.82K</div>
                <div className="all_coll_col">8.8</div>
                <div className="all_coll_col coll_sortable">121.62K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/dinotroop.neartopia.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeigomvelctl3jngqkmkqcjxmowr3bznmafsjkivemf5hxhkfmgjhw4?w=800"
                      alt="Dino Troop"
                    />
                    <span>Dino Troop</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  4.8
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">2K</div>
                <div className="all_coll_col">765</div>
                <div className="all_coll_col">1.62K</div>
                <div className="all_coll_col">7.07</div>
                <div className="all_coll_col coll_sortable">119.31K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/uglyapes.neartopia.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafkreig6smsxcmo4smdbtiqehdy74mati53pav3fon6ynfu7kixg6i7wxm?w=800"
                      alt="Ugly Apes Society"
                    />
                    <span>Ugly Apes Society</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  2.59
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">3.33K</div>
                <div className="all_coll_col">1.45K</div>
                <div className="all_coll_col">7.18K</div>
                <div className="all_coll_col">5.14</div>
                <div className="all_coll_col coll_sortable">107.13K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/nstreetwolves.near">
                    <img
                      src="https://paras-cdn.imgix.net/bafybeiczs2ebpz3xha2p3l6gjsppdebadpnyn43nfycxje4pxankddopdi?w=800"
                      alt="Near Street Wolves"
                    />
                    <span>Near Street Wolves</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  3.5
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">1.97K</div>
                <div className="all_coll_col">1.06K</div>
                <div className="all_coll_col">13.84K</div>
                <div className="all_coll_col">11.36</div>
                <div className="all_coll_col coll_sortable">85.52K USD</div>
              </div>
              <div className="all_coll_row table">
                <div className="all_coll_col">
                  <a href="https://howrare.xyz/mrbrownproject.near">
                    <img
                      src="https://pbs.twimg.com/profile_images/1470449388224860164/fbRSley-_400x400.jpg"
                      alt="Mr. Brown"
                    />
                    <span>Mr. Brown</span>
                  </a>
                </div>
                <div className="all_coll_col floor_collection">
                  1.1
                  <span className="near_floor">
                    <img src={nearlogo} height="14px" alt="near protocol" />
                  </span>
                </div>
                <div className="all_coll_col">4.17K</div>
                <div className="all_coll_col">1.51K</div>
                <div className="all_coll_col">24.71K</div>
                <div className="all_coll_col">13.87</div>
                <div className="all_coll_col coll_sortable">56.91K USD</div>
              </div>
            </div>
            <div className="pagination_loader">
              <div className="loader_container">
                <div className="lds-dual-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap footer">
        <div className="footer_links">
          <a href="https://howrare.xyz" className="f_logo">
            <img
              className="dark_logo"
              src={rareNearLight}
              height="50"
              alt="img"
            />
            <img
              className="light_logo"
              src={rareNearDark}
              height="50"
              alt="img"
            />
          </a>
          <a href="https://howrare.xyz/faq" className="reg">
            <img src={faq} alt="img" /> FAQ
          </a>
          <a href="https://twitter.com/HowRareNear" className="reg">
            <img src={twitter} alt="img" /> Twitter
          </a>
          <a href="https://discord.gg/VmhsCdjyEx" className="reg">
            <img src={discord} alt="img" /> Discord
          </a>
        </div>
        <div className="copyright">&copy 2022 HowRare All rights reserved</div>
      </div>
    </div>
  );
}

export default App;
