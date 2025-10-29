import React from 'react';
import style from './Template13.module.scss';
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import EditTextIcon from "../assets/images/EditTextIcon.svg";

function Container5({ editable, shortMessage, setShortMessage }) {
    const onContentBlur = CreateSanitizeCallback(setShortMessage);
	return (
		<div className={style.Container5}>
			<div className={style.ShortMessageCon}>
				{!editable && <h1 className={style.heading}>Short Message</h1>}

				<ContentEditableDiv
					className={style.shortMessage}
					text={shortMessage}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
				{!editable && <img src={EditTextIcon} alt="" className={style.EditTextIcon} />}
			</div>
			<div className={style.thankYou}>Thank you ! Visit Again</div>
		</div>
	);
}

export default Container5;