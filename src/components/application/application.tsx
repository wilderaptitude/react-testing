export const Application = () => {
    return(
        <form>
            <h1>Form Title</h1>
            <h2>awesome component</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="txet" id="name" />
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">select a country</option>
                    <option value="GB">United Kingdom</option>
                    <option value="ES">Spain</option>
                    <option value="BO">Bolivia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms
                </label>
            </div>
            <button>submit</button>
        </form>
    );
};