import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageRender from "../components/EditingTool/ImageRender";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Template13.module.scss";
import { useSelector } from "react-redux";

function Container3({
	editable,
	introImg4,
	introImg4Mobile,
	introImg5,
	introImg5Mobile,
	setIntroImg4,
	setIntroImg4Mobile,
	setIntroImg5,
	setIntroImg5Mobile,
	introText,
	setIntroText,
	introImg4Position,
	setIntroImg4Position,
	introImg5Position,
	setIntroImg5Position,
}) {
	const onContentBlur = CreateSanitizeCallback(setIntroText);
	const { width, height } = useSelector((state) => state.auth);
	return (
		<div className={styles.Container3}>
			{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
			<ContentEditableDiv className={styles.galleryText} text={introText} onChange={onContentBlur} contentEditable={!editable} />
			<div className={styles.buttons}>
				<button>About Me</button>
				{/* <button>Hire Me</button> */}
			</div>

			<div className={styles.galleryImages}>
				<div className={styles.galleryImg1}>
					<ImageRender initialPosition={introImg4Position} editable={editable} currentId={"introImg4Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg4Mobile} alt="introImg4Mobile" />
						) : (
							<img src={introImg4} alt="introImg4" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={styles.introChangeIcon}
							setImage={setIntroImg4}
							setImageMobile={setIntroImg4Mobile}
							image={introImg4}
							imageMobile={introImg4Mobile}
							activeId={"introImg4Position"}
							initialPosition={introImg4Position}
							setInitialPosition={setIntroImg4Position}
						/>
					)}
					<div className={styles.galleryImg2}>
						<ImageRender initialPosition={introImg5Position} editable={editable} currentId={"introImg5Position"}>
							{width < 931 && height > 600 ? (
								<img src={introImg5Mobile} alt="introImg5Mobile" />
							) : (
								<img src={introImg5} alt="introImg5" />
							)}
						</ImageRender>
						{!editable && (
							<ImageUpload
								className={styles.introChangeIcon}
								setImage={setIntroImg5}
								setImageMobile={setIntroImg5Mobile}
								image={introImg5}
								imageMobile={introImg5Mobile}
								activeId={"introImg5Position"}
								initialPosition={introImg5Position}
								setInitialPosition={setIntroImg5Position}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Container3;
