import React from 'react'
import { range } from '@/utils'
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton';

function LoadingVaporExercise() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(0,12).map((game) => (
          <LibraryGameCardSkeleton/>
        ))}
      </div>
    </section>
  );
}

export default LoadingVaporExercise