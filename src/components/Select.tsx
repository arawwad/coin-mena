import { FC, SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: string[];
}

export const Select: FC<SelectProps> = ({ value, items, onChange }) => (
    <select className={styles.select} value={value} onChange={onChange}>
      {items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
);
