import NotFoundPage from './image/NotFoundImage.gif'

export function PageNotFound() {
  return (
    <div className='not-fount'>
      <img src={NotFoundPage} className="not-found-image" alt="Not Found the Page" />
    </div>
  );
}
