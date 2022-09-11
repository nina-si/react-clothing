import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/category.types';
import { DirectoryCategory } from '../categories/categories.component';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={goToCategoryHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
