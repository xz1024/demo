import React, { Suspense } from 'react';
const LazyLoad = (Comp) => (props) => (
    <Suspense fallback={<div>loading</div>}>
        <Comp {...props} />
    </Suspense>
);

export default LazyLoad