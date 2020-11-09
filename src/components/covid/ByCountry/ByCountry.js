import React, { useState, useEffect } from 'react'
import { fetchSummary } from '../../api/covid';


function ByCountry() {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchSummary());
        }
        fetchAPI();
    }, []);

    fetchedCountries.sort(function(a, b) {
        return b.TotalConfirmed - a.TotalConfirmed;
    });

    
    return (
        <div>
 
        </div>
    )
}

export default ByCountry
