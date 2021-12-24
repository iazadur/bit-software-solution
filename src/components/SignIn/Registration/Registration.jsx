import React from 'react';

const Registration = () => {
    return (

        <div className="w-full mx-auto top-1/2">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="username" className="input input-bordered" />
            </div>

            <div className="p-6 card bordered">
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Neutral</span>
                        <input type="radio" name="opt" checked="checked" className="radio" value="" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Primary</span>
                        <input type="radio" name="opt" checked="checked" className="radio radio-primary" value="" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Secondary</span>
                        <input type="radio" name="opt" checked="checked" className="radio radio-secondary" value="" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Accent</span>
                        <input type="radio" name="opt" checked="checked" className="radio radio-accent" value="" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Disabled</span>
                        <input type="radio" name="opt" checked="checked" value="" disabled="disabled" className="radio" />
                    </label>
                </div>
            </div>



        </div>
    );
};

export default Registration;