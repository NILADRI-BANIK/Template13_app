import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import setting from "../assets/images/Setting.svg";
import AboutMe from "../components/AboutMe/AboutMe";
import HomeButton from "../components/HomeButton/HomeButton";
import Lodging from "../components/Lodging/Lodging";
import NavBar from "../components/NavBar/NavBar";
import Rating from "../components/Rating/Rating";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import styles from "./Template13.module.scss";
import backgroungImage from "./images/backgroundImage.png";
import { useLocation } from "react-router-dom";

const Template13 = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const { user, templateData, isLoading, currentUserId, userId } = useSelector((state) => state.auth);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const { state } = useLocation();

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width]);

	if (width < 1928) document.documentElement.style.setProperty("--base-font-size", "110%");

	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1350) document.documentElement.style.setProperty("--base-font-size", "75%");
	if (width < 1300) document.documentElement.style.setProperty("--base-font-size", "73%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1100) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 1050) document.documentElement.style.setProperty("--base-font-size", "59%");
	if (width < 1024) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 900) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 800) document.documentElement.style.setProperty("--base-font-size", "50%");

	if (width < 1440 && height < 580) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 940 && height < 450) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width < 850 && height < 420) document.documentElement.style.setProperty("--base-font-size", "46%");
	if (width < 750 && height < 380) document.documentElement.style.setProperty("--base-font-size", "43%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [name, setName] = useState("");

	const [coverImage, setCoverImage] = useState("");
	const [coverImageMobile, setCoverImageMobile] = useState("");
	const [coverText, setCoverText] = useState("");
	const [postCount, setPostCount] = useState("");
	const [followers, setFollowers] = useState("");
	const [followings, setFollowings] = useState("");
	const [introText, setIntroText] = useState("");
	const [introImg1, setIntroImg1] = useState("");
	const [introImg1Mobile, setIntroImg1Mobile] = useState("");
	const [introImg2, setIntroImg2] = useState("");
	const [introImg2Mobile, setIntroImg2Mobile] = useState("");
	const [introImg3, setIntroImg3] = useState("");
	const [introImg3Mobile, setIntroImg3Mobile] = useState("");
	const [introImg4, setIntroImg4] = useState("");
	const [introImg4Mobile, setIntroImg4Mobile] = useState("");
	const [introImg5, setIntroImg5] = useState("");
	const [introImg5Mobile, setIntroImg5Mobile] = useState("");
	const [shortMessage, setShortMessage] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [liveIn, setLiveIn] = useState("");
	const [schooling, setSchooling] = useState("");
	const [profession, setProfession] = useState("");

	const [background, setBackground] = useState(backgroungImage);
	const [coverImgPosition, setCoverImgPosition] = useState("");
	const [introImg1Position, setIntroImg1Position] = useState("");
	const [introImg2Position, setIntroImg2Position] = useState("");
	const [introImg3Position, setIntroImg3Position] = useState("");
	const [introImg4Position, setIntroImg4Position] = useState("");
	const [introImg5Position, setIntroImg5Position] = useState("");

	useEffect(() => {
		// if (user === null) return;
		if (state?.viewMode) setEditable(false);
		if (templateData === null) return;
		setRatingData(user?.Rating === undefined ? "0" : user?.Rating);
		setName(user?.username === "" || user?.username === undefined ? templateData?.name : user?.username);
		setCoverImage(templateData?.coverImage);
		setCoverImageMobile(templateData?.coverImageMobile);
		setCoverText(templateData?.coverText);
		setPostCount(user?.postCount);
		setFollowers(user?.followersData?.length);
		setFollowings(user?.followingData?.length);
		setIntroText(templateData?.introText);
		setIntroImg1(templateData?.introImg1);
		setIntroImg1Mobile(templateData?.introImg1Mobile);
		setIntroImg2(templateData?.introImg2);
		setIntroImg2Mobile(templateData?.introImg2Mobile);
		setIntroImg3(templateData?.introImg3);
		setIntroImg3Mobile(templateData?.introImg3Mobile);
		setIntroImg4(templateData?.introImg4);
		setIntroImg4Mobile(templateData?.introImg4Mobile);
		setIntroImg5(templateData?.introImg5);
		setIntroImg5Mobile(templateData?.introImg5Mobile);
		setShortMessage(templateData?.shortMessage);
		setEmail(user?.email === "" || user?.email === undefined ? "James.test@mail.co" : user?.email);
		setPhone(user?.mobile_number === "" || user?.mobile_number === undefined ? "+91 323 323 3245" : user?.mobile_number);
		setLiveIn(templateData?.aboutMe?.liveIn);
		setSchooling(templateData?.aboutMe?.schooling);
		setProfession(templateData?.aboutMe?.profession);
		setCoverImgPosition(templateData?.coverImgPosition);
		setIntroImg1Position(templateData?.introImg1Position);
		setIntroImg2Position(templateData?.introImg2Position);
		setIntroImg3Position(templateData?.introImg3Position);
		setIntroImg4Position(templateData?.introImg4Position);
		setIntroImg5Position(templateData?.introImg5Position);
	}, [user, templateData]);

	const templateUpdatedData = {
		name,
		coverImage,
		coverImageMobile,
		coverText,
		introText,
		introImg1,
		introImg1Mobile,
		introImg2,
		introImg2Mobile,
		introImg3,
		introImg3Mobile,
		introImg4,
		introImg4Mobile,
		introImg5,
		introImg5Mobile,
		coverImgPosition,
		introImg1Position,
		introImg2Position,
		introImg3Position,
		introImg4Position,
		introImg5Position,
		shortMessage,
		aboutMe: {
			email,
			phone,
			liveIn,
			schooling,
			profession,
		},
		hireMe: {
			hireable: false,
		},
	};

	return (
		<>
			{isLoading && <Lodging />}
			<NavBar
				editable={editable}
				setEditable={setEditable}
				showNav={showNav}
				setShowNav={setShowNav}
				templateUpdatedData={templateUpdatedData}
			/>
			{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
			{showAboutMe && (
				<AboutMe
					editable={editable}
					setShowAboutMe={setShowAboutMe}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					liveIn={liveIn}
					setLiveIn={setLiveIn}
					schooling={schooling}
					setSchooling={setSchooling}
					profession={profession}
					setProfession={setProfession}
				/>
			)}
			<div className={styles.TemplateWrapper} id="Temp13" style={{ background: "" }}>
				{!showNav && currentUserId === userId && user && !state.viewMode && (
					<img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />
				)}
				<div className={styles.Template13}>
					<HomeButton {...{ templateUpdatedData }} />
					<Container1
						editable={editable}
						coverImage={coverImage}
						coverImageMobile={coverImageMobile}
						setCoverImage={setCoverImage}
						setCoverImageMobile={setCoverImageMobile}
						name={name}
						setName={setName}
						background={background}
						setBackground={setBackground}
						ratingData={ratingData}
						setShowRating={setShowRating}
						followers={followers}
						coverImgPosition={coverImgPosition}
						setCoverImgPosition={setCoverImgPosition}
						postCount={postCount}
					/>
					<Container2
						editable={editable}
						introImg1={introImg1}
						introImg1Mobile={introImg1Mobile}
						setIntroImg1={setIntroImg1}
						setIntroImg1Mobile={setIntroImg1Mobile}
						introImg2={introImg2}
						introImg2Mobile={introImg2Mobile}
						setIntroImg2={setIntroImg2}
						setIntroImg2Mobile={setIntroImg2Mobile}
						introImg3={introImg3}
						introImg3Mobile={introImg3Mobile}
						setIntroImg3={setIntroImg3}
						setIntroImg3Mobile={setIntroImg3Mobile}
						coverText={coverText}
						setCoverText={setCoverText}
						introImg1Position={introImg1Position}
						setIntroImg1Position={setIntroImg1Position}
						introImg2Position={introImg2Position}
						setIntroImg2Position={setIntroImg2Position}
						introImg3Position={introImg3Position}
						setIntroImg3Position={setIntroImg3Position}
						followings={followings}
					/>
					<Container3
						editable={editable}
						introImg4={introImg4}
						introImg4Mobile={introImg4Mobile}
						setIntroImg4={setIntroImg4}
						setIntroImg4Mobile={setIntroImg4Mobile}
						introImg5={introImg5}
						introImg5Mobile={introImg5Mobile}
						setIntroImg5={setIntroImg5}
						setIntroImg5Mobile={setIntroImg5Mobile}
						introText={introText}
						setIntroText={setIntroText}
						introImg4Position={introImg4Position}
						setIntroImg4Position={setIntroImg4Position}
						introImg5Position={introImg5Position}
						setIntroImg5Position={setIntroImg5Position}
					/>
					<Container4 />
					<Container5 {...{ editable, shortMessage, setShortMessage }} />
				</div>
			</div>
		</>
	);
};

export default Template13;
