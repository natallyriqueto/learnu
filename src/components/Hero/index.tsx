import { PlayCircle } from "phosphor-react";
import { HeroContainer, TextContent, HeroContent, HeroFooter } from "./styles";
import videoImg from "../../assets/videoTutorial.png";
import polygonLeft from "../../assets/polygonLeft.svg";
import polygonRight from "../../assets/polygonRight.svg";

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>

                <TextContent>
                    <p>WELCOME</p>
                    <h1>The Power of Education</h1>
                    <p>Are you in search of an innovative solution to empower learners across the globe and ensure equal access to education? </p>
                    <div>
                        <button type="button">Start now</button>
                        <div>
                            <PlayCircle size={32} />
                            <span>See our work</span>
                        </div>
                    </div>
                </TextContent>

                <img src={videoImg} alt="woman watching a video"/>
            </HeroContent>

            <HeroFooter>
                <img src={polygonLeft} />
                <img src={polygonRight} />
            </HeroFooter>
            
        </HeroContainer>
    );
}