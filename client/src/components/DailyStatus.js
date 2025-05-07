import {useState} from 'react'

const DailyStatus=()=>{
    const [showTaskList, setShowTaskList] = useState(false)
    const [enableMarkingStatus, setEnableMarkingStatus] = useState(false)
    const [enableNameField, setEnableNameField] = useState(true)
    const [showMarkingStatusBtn, setShowMarkingStatusBtn] = useState(true)
    const [nameFieldTxtBox,setNameFieldTxtBox] = useState('')

    function handleOnClick(){
        setShowTaskList(true)
        setEnableNameField(false)
        setShowMarkingStatusBtn(false)
        setNameFieldTxtBox((prev)=>`Hello ${prev}`)
    }

    function onUserNameInputChange(e){
        setNameFieldTxtBox(e.target.value);
        if(e.target.value.length){
            setEnableMarkingStatus(true) 
        }else{
            setEnableMarkingStatus(false)
        }
    }

    return(
        <div className="left-container">
            <div className="container">
                <h2>Mark Daily Status</h2>
                <input type="text" readOnly={!enableNameField} placeholder="Enter your Name" value={nameFieldTxtBox} onChange={onUserNameInputChange}/>
                {showMarkingStatusBtn && <button disabled={!enableMarkingStatus} onClick={handleOnClick}> Start Marking Status </button>}
                {showTaskList && <div id="item-list">
                    <ul class="checklist">
                        <li><label><input type="checkbox" /> Chanting without mobile</label></li>
                        <li><label><input type="checkbox" /> No explicit content</label></li>
                        <li><label><input type="checkbox" /> Devotee Association</label></li>
                        <li><label><input type="checkbox" /> Reading at least one Shloka</label></li>
                    </ul>
                    <button>Submit</button>
                </div>}
            </div>
        </div>
    )
}

export default DailyStatus