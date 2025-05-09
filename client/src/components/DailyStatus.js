import {useState} from 'react'
import {fetchUserDetails} from '../api/index.js'

const DailyStatus=()=>{
    const [showTaskList, setShowTaskList] = useState(false)
    const [enableMarkingStatus, setEnableMarkingStatus] = useState(false)
    const [enableEmailField, setEnableEmailField] = useState(true)
    const [showMarkingStatusBtn, setShowMarkingStatusBtn] = useState(true)
    const [emailFieldTxtBox,setEmailFieldTxtBox] = useState('')

    const [userDetails, setUserDetails] = useState({})

    async function handleOnClick(){
        setShowMarkingStatusBtn(false)
        const response = await fetchUserDetails(emailFieldTxtBox)
        setUserDetails(response.data)
        setShowTaskList(true)
        setEnableEmailField(false)
        setEmailFieldTxtBox(()=>`Hello ${response?.data?.name}`)
    }

    function onUserEmailInputChange(e){
        const input = e.target.value
        setEmailFieldTxtBox(input.trim());
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(input)) {
            setEnableMarkingStatus(true);
        } else{
            setEnableMarkingStatus(false)
        }
    }

    return(
            <div className="container">
                <div class="container-header">
                    <h2>Mark Daily Status</h2>
                    <input type="text" readOnly={!enableEmailField} placeholder="Enter your Email" value={emailFieldTxtBox} onChange={onUserEmailInputChange}/>
                    {showMarkingStatusBtn && <button disabled={!enableMarkingStatus} onClick={handleOnClick}> Submit </button>}
                
                </div>
                {showTaskList && <div id="item-list">
                    <ul className="checklist">
                        <li><label><input type="checkbox" /> Chanting without mobile</label></li>
                        <li><label><input type="checkbox" /> No explicit content</label></li>
                        <li><label><input type="checkbox" /> Devotee Association</label></li>
                        <li><label><input type="checkbox" /> Reading at least one Shloka</label></li>
                        <li><label><input type="checkbox" /> Chanting without mobile</label></li>
                        <li><label><input type="checkbox" /> No explicit content</label></li>
                        <li><label><input type="checkbox" /> Devotee Association</label></li>
                        <li><label><input type="checkbox" /> Reading at least one Shloka</label></li>
                    </ul>
                    <button>Submit</button>
                </div>}
            </div>
    )
}

export default DailyStatus