import React from "react";
import { useSelector } from "react-redux";
import ratingIcon from "../assets/images/rating.png";
import ImageRender from "../components/EditingTool/ImageRender";
import { redirectToSocialMedia } from "../components/Hooks/RedirectToSocialMedia";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Template13.module.scss";

function Container1({
	editable,
	setShowRating,
	ratingData,
	coverImage,
	coverImageMobile,
	setCoverImage,
	setCoverImageMobile,
	name,
	background,
	setBackground,
	followers,
	coverImgPosition,
	setCoverImgPosition,
}) {
	const { userId, user, currentUserId, currentUser, width, height } = useSelector((state) => state.auth);
	const handleRating = () => {
		if (redirectToSocialMedia()) return window.open(process.env.REACT_APP_SOCIAL_MEDIA_URL, "_self");
		setShowRating(true);
	};
	return (
		<div className={styles.Container1}>
			<div className={styles.hero}>
				<div className={styles.background}>
					{/* {!editable && (
						<ImageUpload
							className={styles.backgroundChangeIcon}
							setImage={setBackground}
							image={background}
							activeId={"coverImgPosition"}
							initialPosition={coverImgPosition}
							setInitialPosition={setCoverImgPosition}
						/>
					)} */}
					{/* <ImageRender initialPosition={coverImgPosition} editable={editable} currentId={"coverImgPosition"}>
						<img src={background} alt="" />
					</ImageRender> */}
					<img src={background} alt="" />

					<div className={styles.mainCon}>
						<div className={styles.heroImg}>
							{!editable && (
								<ImageUpload
									className={styles.coverChangeIcon}
									setImage={setCoverImage}
									setImageMobile={setCoverImageMobile}
									image={coverImage}
									imageMobile={coverImageMobile}
									activeId={"coverImgPosition"}
									initialPosition={coverImgPosition}
									setInitialPosition={setCoverImgPosition}
								/>
							)}
							<ImageRender initialPosition={coverImgPosition} editable={editable} currentId={"coverImgPosition"}>
								{width < 931 && height > 600 ? (
									<img src={coverImageMobile} alt="coverImageMobile" />
								) : (
									<img src={coverImage} alt="coverImage" />
								)}
							</ImageRender>
						</div>
						<div className={styles.details}>
							<div className={styles.rating} onClick={handleRating}>
								<img src={ratingIcon} alt="" />
								<span>{ratingData}</span>
							</div>
							<div className={styles.name}>
								<h3>I'm</h3>
								<div className={styles.coverText}>{name.split(" ")[0]}</div>
							</div>
							{userId === currentUserId ? (
								<div
									className={styles.followers}
									style={{ cursor: "pointer" }}
									onClick={() => {
										window.open(`${process.env.REACT_APP_SOCIAL_MEDIA_URL}/FollowList`, "_self");
									}}>
									<h2>{followers}</h2>
									<p>Followers</p>
								</div>
							) : (
								<div className={styles.followers}>
									<h2>{followers}</h2>
									<p>Followers</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Container1;
