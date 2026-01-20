import React from 'react';
import { Button } from './Button';

const ButtonDemo: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Button Component Demo</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Primary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="sm">Primary Small</Button>
          <Button variant="primary" size="md">Primary Medium</Button>
          <Button variant="primary" size="lg">Primary Large</Button>
          <Button variant="primary" size="md" isLoading={true}>Loading...</Button>
          <Button variant="primary" size="md" disabled>Disabled</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Secondary Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="secondary" size="sm">Secondary Small</Button>
          <Button variant="secondary" size="md">Secondary Medium</Button>
          <Button variant="secondary" size="lg">Secondary Large</Button>
          <Button variant="secondary" size="md" isLoading={true}>Loading...</Button>
          <Button variant="secondary" size="md" disabled>Disabled</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ghost Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="ghost" size="sm">Ghost Small</Button>
          <Button variant="ghost" size="md">Ghost Medium</Button>
          <Button variant="ghost" size="lg">Ghost Large</Button>
          <Button variant="ghost" size="md" isLoading={true}>Loading...</Button>
          <Button variant="ghost" size="md" disabled>Disabled</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Outline Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="outline" size="sm">Outline Small</Button>
          <Button variant="outline" size="md">Outline Medium</Button>
          <Button variant="outline" size="lg">Outline Large</Button>
          <Button variant="outline" size="md" isLoading={true}>Loading...</Button>
          <Button variant="outline" size="md" disabled>Disabled</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Danger Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="danger" size="sm">Danger Small</Button>
          <Button variant="danger" size="md">Danger Medium</Button>
          <Button variant="danger" size="lg">Danger Large</Button>
          <Button variant="danger" size="md" isLoading={true}>Loading...</Button>
          <Button variant="danger" size="md" disabled>Disabled</Button>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Full Width Buttons</h2>
        <div className="space-y-4">
          <Button variant="primary" size="md" fullWidth>Full Width Primary</Button>
          <Button variant="secondary" size="md" fullWidth>Full Width Secondary</Button>
          <Button variant="danger" size="md" fullWidth>Full Width Danger</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
