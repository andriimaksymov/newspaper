import { useEffect, useState } from 'react';
import { styled } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import Layout from '../components/layout';
import routes from '../utils/routes';

export const StyledIframe = styled('iframe')({
  border: 0,
  width: '100%',
  height: '150vh',
  boxShadow: 'none',
});

const ArticleView = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const [url, setUrl] = useState(localStorage.getItem('article'));

  useEffect(() => {
    if (!url) {
      history.push({ pathname: routes.home });
    } else {
      setUrl(localStorage.getItem('article'));
    }

    return () => {
      localStorage.removeItem('article');
    };

    // eslint-disable-next-line
  }, [id]);

  return (
    <Layout>
      <StyledIframe title={url} src={url} />
    </Layout>
  );
};

export default ArticleView;
