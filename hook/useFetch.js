import React from "react";
import axios from "axios";

const useFetch = (endpointArg, queryArg) => {
	const [data, setData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState(false);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpointArg}`,
		params: { ...queryArg },
		headers: {
			"X-RapidAPI-Key": 'f7412f3e12mshb8bd5ddd7a7a3b3p1b5339jsn63fb2570f19c',
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

    const options2 = {
        method: 'GET',
        url: '../data/jobsData.fakeApi.json'
    }

	const fetchData = async () => {
		setIsLoading(true);
		try {
            const response = await axios.request(options);
			setData(response.data.data);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	const reFetch = () => {
		fetchData();
	};

	return { data, isLoading, error, reFetch };
};

export default useFetch;
