import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="foot">
        <div className="logo">
          <svg
            width="170"
            height="40"
            viewBox="0 0 170 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M117.514 1.21646L117.514 38.7835H123.148L123.148 1.21646H117.514ZM57.3221 0.57473C46.3463 0.574681 37.8303 8.56332 37.8303 20C37.8303 31.9517 46.3463 39.4255 57.3221 39.4253C68.2979 39.4251 76.8314 31.9517 76.8139 20C76.798 9.16418 68.2979 0.574779 57.3221 0.57473ZM71.1901 20C71.1901 28.4666 64.9812 34.0774 57.3221 34.0774C49.663 34.0774 43.4541 28.4666 43.4541 20C43.4541 11.687 49.663 5.92265 57.3221 5.92265C64.9812 5.92265 71.1901 11.687 71.1901 20ZM0 3.39001e-06V38.7835H5.74992L5.74992 13.1531L35.6298 40V31.9591L0 3.39001e-06ZM81.0513 20L101.961 38.7836H110.345L89.4038 20L110.345 1.21644H101.961L81.0513 20ZM170 38.7835H163.802L159.27 30.4644H138.742L134.209 38.7835H128.011L135.517 24.9176H156.322L145.948 5.64789L149.006 0L149.006 3.76291e-05L149.006 0L170 38.7835Z"
              fill="#005AFF"
            />
          </svg>
        </div>
        <hr className="hr" />
        <div className="about">
          <div className="one">
            <p>Looking for Nokia licensed products?</p>
            <p> Explore consumer devices</p>
          </div>
          <div className="two">
            <p>Standardization</p>
            <p>Experience centers</p>
          </div>
          <p>Nokia EDU and training</p>
          <p>Sustainability</p>
        </div>
        <hr className="hr2" />
        <div className="catagory">
          <div className="link">
            <p>Contact us</p>
            <p>Support</p>
            <p>Extranet Access</p>
          </div>
          <button>
          Subscribe for our latest news

          </button>
          <div className="icon_cat">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcpJREFUSEvF1T3Ij2EUBvDf6yNJiSRlsCDJdxgxGcmAUixGohhkkJLBoEQxWQmDxCSLZBELkpQMysSiUPLdpfv/drs9T943/XvP9DznnPtc97nOxz1iyDIy5PgmDGAhDmMDltN7kZ94hvs4i5ctI10Z7CvOU8dJ31fsx8X6XAuwFg8xaZzBB+7fsA5PBooW4Aa2jSP4W6zADpwv565jex/AayzoAHiDU3iOOViCo4h/AHLrR+XcKyzqA/iIGQ3AnXKjD5hbbO+wDLfxCbMwr9jiN7MLILx/b4In0OISbDc2IZ1zD5cwuXRQfSx1GG2QugZRfmkATuMILiDdVUs4P4Bb2FIZcskpXRlEmVarZS9ulhtnHmp5ilU4jhOV4UfJ7LeqziDfMdaSvr6Ku1jZ2B5jDY7hZGMbjdu2afitJTzvwTkcbGyZ3EMlw62VrbcG8WkBktFqTMcubCyBUuQrmNZR5M/F/y+Kouhq0/R6hi+U1JI9FfrmN/r3mD3QtRRlWY0OSVO4TGg9aJubwIPfF1jaB3ANO3sOjlV9GZmZTorW48F/LrsszLRwJ0CUQ13XA+D6wcky65P6wTmDLLo/ZMKezLEW9J9+Q8/gFzNKWBk2yoMrAAAAAElFTkSuQmCC"/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUVJREFUSEvt1b8rR1EYx/GXHwP5kVBSZKBkMLAYbRZl8A8YlAH/hFgtyqTkX/Av2FDE4sdgkAwoiUHJj07dW9fJ955vYVCe7d7zPJ/3Oc/nOffW+OWo+WV9/4Bkh+MWdWMZA+hBf1KBd5zgFmdYwnVeVwQMYh8tVYiWpTxgFBchqQjYwsw3xfPyTczGgAOM/BBgD2Mx4A4dFQChz5NYy/xJ7eMSfTHgFbUVKt9Qh3osZoPQXEK5R3sR0ISnkoJwgiK8EyuYi3zMJR7RWgSEnb2UAMLpQk4eKcAzGuMWhV1WihwQIPPZrLeV5N+gKwaEFoVWfRUBMI3VKk0+xVAMCM73psajyvUdjMeAbUxVKZBK28gG4NNNHsZubk5KIbEePhWH8QnCc7jJC7jKBCaydw1fCAbPjqPpO8c6jvL8/x9O0qq/36IPaFYyGVscNCUAAAAASUVORK5CYII="/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhZJREFUSEvdlb9rFEEUxz9vE1BQbnYXj0NQjIKIoCJipaUiKII/kKAELLQQSa8oin9AbCwiNhICaWxSCEIKG5E0QUHRwspgQDSYY2bviHiXc54s8Y4kd7d3F0iTKWfe+374vpn9rrDBSzZYn00GKBQK2+bn5xezxhbHcc772iOQ88BeYEmEUWuT+3Ec71StXbC2NApoqrNyRH3GmM9BEAxaaz+1g4SheQ2canE+B+xW5VqSJC/q5w1AGIYDoLPALxF/ydry9FoRY8wxEd5nOHwHvAGZcM59WOVgYICtzpky0P9f4Hl//9LDhYXfP+qCUZQbUpWJDMAiyLBzbrzJQboRhuE06InVAvpWVV6KyAz4oyBPMgBjziU3Vp43RpTP57dXq9UDIkwBO9bzfYgwYm1ypyUgjuNd3v/9BhSB/PoAOmxt6WlLABCEofkK7FmPeNrT1+cPFovlL+0A6R1cBk2fWP2ie2HNOpfsW9vQFBXGmEERHgCHe1EX4ba1ybOOgCjKnVOVV72IA3POJfuBakfA8nPNjYNc7xJS815PlkqlmVb17dI0iKLokPf+nghXM0AKctM5N9aupgmQBl6lUjmuqndFONuuUZU/IjLknJvMctoAGGNOi/AYOLImBJv6VZkKguCWtTYNuMy1ysFyFPsr4C+CnAG2ABXgJ8h3IE3SSefcx07CLbOo26Ze6jbZL7MX693W/gOo6K8ZHR8GWAAAAABJRU5ErkJggg=="/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOVJREFUSEvt1DFKQ0EQxvFfChHraOMRtEthYZPGAwREb2DQMk0qG4v0dhFs7WIjthYWtnqABFIqaK4QCA+mCJKw7OM9SJGtht2d7z87szMNNa9Gzfo2DnCMAU6wj2884XZdJnJecIgpdv+JPeOiCsAQ1yuERrisAvCJVgi94wzz1CfJSdEvDkLwBg8p8eI8BzBDM0S7eKwCUOT2KIT62Av7FV9hf+CtbA2KH3KeiLSH+zoBHbyUBdyhHc6n2Al7jJ+wrzApC1j2+4vuLfYqK/IWkNVo2xokJ0vtKUpGsOpCzjTdTMACXwcqGZt877oAAAAASUVORK5CYII="/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvt1U0rRkEYxvHfQykrsrFSXoqFKFl5KQsfQ76AslA2VvZKSfkG8jFkIUXWkuRtZaVsWCg0NUfTOFHPeLJg6tQ953Rf/3uue2ZOQ4tHo8X66gCDeMXNT8BzwDaWo/AmVkshKWAE55lgP25LIN8BBkqtyi3awVKseAsrJdWH3LomD8cmX5aK1wGm0RGFn3Ec4wl0xfgJJ+jBLMbQjj18KipfwT16o9AVhmJ8iJkYX2A9Cqb5YWuvYSNdeTOAB3TGp87FeexXH5oBVLkBdIdxtCWkYNVCKWAXi1FkDgcJ4AyjpYBwKEMvqhFW0hcnj+guBYSd9pIATjGZzD+s/6oH1wgXXxjpLgrz4PlbIniEqX9AddD+uEV1R7/o3a/89IsqzpPfAXF0UxkpbL/qAAAAAElFTkSuQmCC"/>
          
          </div>

        </div>
        <hr className="hr3" />
        <div className="end">
          <div className="end_1">
          <p>©2023 Nokia all rightsv</p>
          <p>reserved</p>
          </div>
          <div className="end_2">
            <p>Cookies</p>
            <p>Privacy</p>
            <p>Terms of use</p>
            <p>Inclusive terminology</p>
            <p>Modern slavery statement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
