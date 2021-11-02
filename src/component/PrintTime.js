import React, { useState, useEffect } from 'react'

function PrintTime() {
	const items = ['en-US', 'en-GB', 'pt-BR', 'ar']
	const [selectedLng, setselectedLng] = useState(items[0])

	const date = new Date()

	useEffect(() => {
		console.log(
			new Intl.DateTimeFormat(`${selectedLng}`, {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',

				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
			}).format(date),
		)
	}, [selectedLng])

	return (
		<div>
			<select onChange={(e) => setselectedLng(e.target.value)}>
				{items.map((item) => (
					<option value={item} key={item}>
						{item}
					</option>
				))}
			</select>
			<p>
				{new Intl.DateTimeFormat(`${selectedLng}`, {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',

					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
				}).format(date)}
			</p>
		</div>
	)
}

export default PrintTime
