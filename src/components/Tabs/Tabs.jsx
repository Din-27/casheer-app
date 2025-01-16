import { useSelector } from "react-redux";
import { useProduct } from "../../lib/hook/useProduct";
import { useEffect } from "react";
import { useState } from "react";

export default function Tabs({ title }) {
    const [param, setParam] = useState('')
    const queryString = window.location.search;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const params = new URLSearchParams(queryString);
    const { category } = useSelector((state) => state.product);
    const { onClickFilterKlikCategory } = useProduct()

    useEffect(() => {
        // Retrieve specific parameters
        const category = params.get("category");
        setParam(category)
    }, [params]);

    return (
        <ul className="flex overflow-x-auto -mb-px text-sm font-medium text-center text-gray-500 my-2">
            <li className={`me-2 ${!param ? ' bg-white rounded-t-xl' : ''}`}>
                <button onClick={() => onClickFilterKlikCategory('All')} className="space-x-2 inline-flex items-center justify-center p-4 rounded-t-lg hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-snowflake"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 4l2 1l2 -1" /><path d="M12 2v6.5l3 1.72" /><path d="M17.928 6.268l.134 2.232l1.866 1.232" /><path d="M20.66 7l-5.629 3.25l.01 3.458" /><path d="M19.928 14.268l-1.866 1.232l-.134 2.232" /><path d="M20.66 17l-5.629 -3.25l-2.99 1.738" /><path d="M14 20l-2 -1l-2 1" /><path d="M12 22v-6.5l-3 -1.72" /><path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" /><path d="M3.34 17l5.629 -3.25l-.01 -3.458" /><path d="M4.072 9.732l1.866 -1.232l.134 -2.232" /><path d="M3.34 7l5.629 3.25l2.99 -1.738" /></svg>
                    <p className="text-lg">All</p>
                </button>
            </li>
            {category?.length > 0 && category.map((x, y) =>
                <li key={y} className={`me-2 ${param === x ? ' bg-white rounded-t-xl' : ''}`}>
                    <button onClick={() => onClickFilterKlikCategory(x)} className="space-x-2 inline-flex items-center justify-center p-4 rounded-t-lg hover:text-gray-600">
                        {x === 'Food'
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-burger"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" /><path d="M5 12h14" /></svg>
                            : (x === 'Beverage' || x === 'Drink')
                                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-beer"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 21h6a1 1 0 0 0 1 -1v-3.625c0 -1.397 .29 -2.775 .845 -4.025l.31 -.7c.556 -1.25 .845 -2.253 .845 -3.65v-4a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v4c0 1.397 .29 2.4 .845 3.65l.31 .7a9.931 9.931 0 0 1 .845 4.025v3.625a1 1 0 0 0 1 1z" /><path d="M6 8h12" /></svg>
                                : x === 'Bakery'
                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-baguette"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841z" /><path d="M9.5 7.5l1.5 3.5" /><path d="M6.5 10.5l1.5 3.5" /><path d="M12.5 4.5l1.5 3.5" /></svg>
                                    : x === 'Bread'
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bread"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4a3 3 0 0 1 2 5.235v8.765a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-8.764a3 3 0 0 1 1.824 -5.231h12.176v-.005z" /></svg>
                                        : x === 'Drink'
                                            ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cup"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11h14v-3h-14z" /><path d="M17.5 11l-1.5 10h-8l-1.5 -10" /><path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M15 5v-2" /></svg>
                                            : x === 'Coffe'
                                                ? '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg>'
                                                : x === 'Bubble ice'
                                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bubble-tea"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" /><path d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" /><path d="M5 9h14" /><path d="M12 9l4 -7" /><path d="M10.01 14h.01" /><path d="M11.02 18h.01" /><path d="M13.02 16h.01" /></svg>
                                                    : ''}
                        <p className="text-lg">{x}</p>
                    </button>
                </li>
            )}
        </ul>
    )
}
