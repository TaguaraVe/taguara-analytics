'use client';
import Script from 'next/script';
import { useState } from 'react';

const allViews = [
  {
    role: 'Visit',
    views: [
      'https://public.tableau.com/views/CursoVisualizaciondeDataTutorials/CarSales?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      'https://public.tableau.com/views/YTBaraan/CustomerDashboard?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      'https://public.tableau.com/views/HRDashboardMyVersion/HRNewDetails?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      'https://public.tableau.com/views/PizzaDashBoard/DBResumen?:language=es-ES&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    ],
  },
];

const Tableau = () => {
  const [current, setCurrent] = useState(0);
  const [vista, setVista] = useState(allViews[0].views);

  const nextViz = () => {
    current + 1 > vista.length ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <section>
      <div className="flex justify-center items-center p-2">
        <button className="text-xl px-4 py-2 bg-slate-300" onClick={nextViz}>
          Next
        </button>
      </div>
      <div className="w-[90vw] h-screen bg-slate-600 mx-auto  ">
        <tableau-viz
          id="tableauViz"
          src={vista[current]}
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </div>
      <Script
        type="module"
        src="https://prod-useast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
      ></Script>
    </section>
  );
};

export default Tableau;
