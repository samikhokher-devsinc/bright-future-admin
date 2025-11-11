'use client';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Image from 'next/image';

interface DropdownMenuProps {
  imageSrc?: string;
  imageAlt?: string;
  label: string;
  menuItems: MenuProps['items'];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ imageSrc, imageAlt, label, menuItems }) => (
  <Dropdown
    menu={{ items: menuItems }}
    trigger={['click']}
  >
    <div>
      <button
        onClick={(e) => e.preventDefault()}
        className='flex items-center gap-3 bg-white border border-gray-200 rounded-full px-3 hover:bg-gray-50 shadow-sm transition-all h-[40px] cursor-pointer'
      >
        {imageSrc && (
          <div className="relative w-8 h-8">
            <Image
              src={imageSrc}
              alt={imageAlt || 'dropdown image'}
              fill
              style={{
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </div>
        )}
        <span className='text-[11px] md:text-[15px] font-medium text-black'>{label}</span>
        <DownOutlined className="text-xs text-black" />
      </button>
    </div>
  </Dropdown>
);

export default DropdownMenu;