import useJsonFetch from '../hooks/UseJsonFetch'

export default function Component(props) {
  const [data, isLoading, error] = useJsonFetch(props.url);
  return (
    <div className="component">
      <h1>{props.title}</h1>
      <div className="component-url">{props.url}</div>
      {data && <div className="component-ok">{data.status}</div>}
      {error && <div className="component-error">{error.toString()}</div>}
      {isLoading && <div className="component-load">Загрузка...</div>}
    </div>
  );
}