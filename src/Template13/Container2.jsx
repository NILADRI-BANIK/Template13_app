import React from "react";
import { useSelector } from "react-redux";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageRender from "../components/EditingTool/ImageRender";
import FollowButton from "../components/GlobalButtons/FollowButton";
import MessageButton from "../components/GlobalButtons/MessageButton";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Template13.module.scss";

function Container2({
	editable,
	introImg1,
	introImg1Mobile,
	setIntroImg1,
	setIntroImg1Mobile,
	introImg2,
	introImg2Mobile,
	setIntroImg2,
	setIntroImg2Mobile,
	introImg3,
	introImg3Mobile,
	setIntroImg3,
	setIntroImg3Mobile,
	coverText,
	setCoverText,
	introImg1Position,
	setIntroImg1Position,
	introImg2Position,
	setIntroImg2Position,
	introImg3Position,
	setIntroImg3Position,
	followings,
}) {
	const onContentBlur = CreateSanitizeCallback(setCoverText);
	const { userId, currentUserId, width, height } = useSelector((state) => state.auth);

	return (
		<div className={styles.Container2}>
			<div className={styles.upper}>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
				<ContentEditableDiv className={styles.introText} text={coverText} onChange={onContentBlur} contentEditable={!editable} />
				<div className={styles.buttons}>
					{userId === currentUserId ? (
						<button
							onClick={() => {
								window.open(`${process.env.REACT_APP_SOCIAL_MEDIA_URL}/FollowList`, "_self");
							}}>
							<p>{followings}</p>
							Following
						</button>
					) : (
						<FollowButton />
					)}
					<MessageButton />
				</div>
			</div>
			<div className={styles.myIntro}> My Intro</div>

			<div className={styles.introPics}>
				<div className={styles.introImg1}>
					<ImageRender initialPosition={introImg1Position} editable={editable} currentId={"introImg1Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg1Mobile} alt="introImg1Mobile" />
						) : (
							<img src={introImg1} alt="introImg1" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={styles.introChangeIcon}
							setImage={setIntroImg1}
							setImageMobile={setIntroImg1Mobile}
							image={introImg1}
							imageMobile={introImg1Mobile}
							activeId={"introImg1Position"}
							initialPosition={introImg1Position}
							setInitialPosition={setIntroImg1Position}
						/>
					)}
				</div>
				<div className={styles.introImg2}>
					<ImageRender initialPosition={introImg2Position} editable={editable} currentId={"introImg2Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg2Mobile} alt="introImg2Mobile" />
						) : (
							<img src={introImg2} alt="introImg2" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={styles.introChangeIcon}
							setImage={setIntroImg2}
							setImageMobile={setIntroImg2Mobile}
							image={introImg2}
							imageMobile={introImg2Mobile}
							activeId={"introImg2Position"}
							initialPosition={introImg2Position}
							setInitialPosition={setIntroImg2Position}
						/>
					)}
				</div>
				<div className={styles.introImg3}>
					<ImageRender initialPosition={introImg3Position} editable={editable} currentId={"introImg3Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg3Mobile} alt="introImg3Mobile" />
						) : (
							<img src={introImg3} alt="introImg3" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={styles.introChangeIcon}
							setImage={setIntroImg3}
							setImageMobile={setIntroImg3Mobile}
							image={introImg3}
							imageMobile={introImg3Mobile}
							activeId={"introImg3Position"}
							initialPosition={introImg3Position}
							setInitialPosition={setIntroImg3Position}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Container2;
