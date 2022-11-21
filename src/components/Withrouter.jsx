import React from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
 


export function withRouter( Child ) {
    return ( props ) => {
      const params = useParams();
      const navigation = useNavigate();
      return <Child { ...props } navigation={ navigation } params={ params } />;
    }
}