import react from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./headervideo.css";

function Headervideo(){
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        //access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        //height: '390', //Original
        //width: '640', //Original
        height: "390", //Modified
        width: "550", //Modified
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    //return <YouTube videoId="2giu87y" opts={opts} onReady={onPlayerReady} />;

    return (
        //<div class="container col-md-6">
        //  <div class="row h-100 align-items-center">
        //      <YouTube videoId="128763hhjjcd" opts={opts} onReady={onPlayerReady} />
        //  </div>
        //</div>
        <section class="headervideo" id="about">
            <div class="container text-center py-5">
                <h2>Our History</h2>
                <div class="row">
                    <div class="col-md-6">
                        <i class="fa f-bar-chart myicon"></i>
                        <div class="card-body">
                            <h5 class="card-title">About 2022</h5>
                            <YouTube class="container"
                                videoId="5zchVuZvxDc"
                                opts={opts}
                                onReady={onPlayerReady}
                            />
                        </div>
                    </div>

                    <div class="col-md-6">
                        <i class="fa f-bar-chart myicon"></i>
                        <div class="card-body">
                            <h5 class="card-title">About 2022</h5>
                            <YouTube class="container"
                                videoId="GwkMiLVwJWs"
                                opts={opts}
                                onReady={onPlayerReady}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Headervideo;