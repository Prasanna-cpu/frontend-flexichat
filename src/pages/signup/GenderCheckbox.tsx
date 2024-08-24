import React from 'react';

interface GenderCheckboxProps {
    onCheckboxChange:(gender:string) => void;
    selectedGender:string;
}

const GenderCheckbox: React.FunctionComponent<GenderCheckboxProps> = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className={"flex"}>
            <div className={"form-control"}>
                <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected":""}`}>
                    <span className={"label-text text-white"}>Male</span>
                    <input
                        type={"checkbox"}
                        className={"checkbox border-slate-500"}
                        checked={selectedGender==="male"}
                        onChange={()=>onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div>
                <label className={`label gap-2 cursor-pointer  ${selectedGender==="female" ? "selected":""}`}>
                    <span className={"label-text text-white"}>Female</span>
                    <input
                        type={"checkbox"}
                        className={"checkbox border-slate-500"}
                        checked={selectedGender==="female"}
                        onChange={()=>onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;