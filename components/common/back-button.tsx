"use client"

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      <ArrowLeft className="mr-2" />
      Back
    </Button>
  );
};

export default BackButton;