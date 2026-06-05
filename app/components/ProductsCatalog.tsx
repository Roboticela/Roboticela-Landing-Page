'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Search } from 'lucide-react';
import Link from 'next/link';

import { easeOut } from './animations';
import ProductCategoryNav from './ProductCategoryNav';
import ProductLogo from './ProductLogo';
import ProductSearch from './ProductSearch';
import type { ProductCategory, ProductCategorySlug } from '../data/productCategories';
import { getCategoryBySlug, productCategories } from '../data/productCategories';
import {
  filterProducts,
  getProductsByCategory,
  products,
  type Product,
} from '../data/products';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const PRODUCTS_PER_CATEGORY = 6;

type ProductsCatalogProps = {
  activeCategory?: ProductCategorySlug;
  title?: string;
  description?: string;
  showHeader?: boolean;
};

function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <ProductLogo name={product.name} logo={product.logo} />
      {category && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {category.name}
        </span>
      )}
      <h4 className="text-2xl font-semibold text-foreground mb-4">{product.name}</h4>
      <p className="text-foreground/70 leading-relaxed mb-6">{product.description}</p>
      <div className="flex flex-wrap gap-3">
        {product.links.map((link, linkIndex) =>
          link.external ? (
            <a
              key={linkIndex}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} — ${product.name}`}
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
            >
              {link.label}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <Link
              key={linkIndex}
              href={link.href}
              aria-label={`${link.label} — ${product.name}`}
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium text-sm transition-all duration-300"
            >
              {link.label}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )
        )}
      </div>
    </motion.div>
  );
}

function PlaceholderCard() {
  return (
    <motion.div
      variants={itemAnimation}
      className="relative bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/40 overflow-hidden select-none"
    >
      <div className="blur-sm pointer-events-none">
        <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <div className="w-8 h-8 rounded-lg bg-primary/30" />
        </div>
        <div className="h-6 w-3/4 rounded-lg bg-foreground/20 mb-4" />
        <div className="h-4 w-full rounded-md bg-foreground/10 mb-2" />
        <div className="h-4 w-5/6 rounded-md bg-foreground/10 mb-2" />
        <div className="h-4 w-2/3 rounded-md bg-foreground/10 mb-6" />
        <div className="flex gap-2">
          <div className="h-8 w-24 rounded-full bg-primary/20" />
          <div className="h-8 w-20 rounded-full bg-primary/10" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/30 backdrop-blur-[2px] rounded-3xl">
        <div className="flex flex-col items-center gap-2">
          <Lock className="w-7 h-7 text-primary/60" />
          <p className="text-sm font-medium text-foreground/70">Coming Soon</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProductGrid({
  items,
  placeholderCount,
  gridKey,
}: {
  items: Product[];
  placeholderCount: number;
  gridKey: string;
}) {
  return (
    <motion.div
      key={gridKey}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerAnimation}
      initial="hidden"
      animate="show"
    >
      {items.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
      {Array.from({ length: placeholderCount }).map((_, index) => (
        <PlaceholderCard key={`placeholder-${index}`} />
      ))}
    </motion.div>
  );
}

function CategorySection({
  category,
  items,
  showPlaceholders,
}: {
  category: ProductCategory;
  items: Product[];
  showPlaceholders: boolean;
}) {
  const placeholderCount = showPlaceholders
    ? Math.max(0, PRODUCTS_PER_CATEGORY - items.length)
    : 0;

  return (
    <section id={category.slug} className="mb-16 scroll-mt-32">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{category.name}</h2>
        <p className="text-lg text-foreground/70 max-w-3xl">{category.description}</p>
        <Link
          href={`/products/${category.slug}`}
          className="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm hover:underline"
        >
          View all {category.name}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <ProductGrid
        items={items}
        placeholderCount={placeholderCount}
        gridKey={`${category.slug}-${items.length}-${placeholderCount}`}
      />
    </section>
  );
}

export default function ProductsCatalog({
  activeCategory,
  title = 'Our Products',
  description = 'Tools and platforms crafted with care. Each one designed to make your work effortless.',
  showHeader = true,
}: ProductsCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim().length > 0;

  const catalogProducts = useMemo(() => {
    if (activeCategory) return getProductsByCategory(activeCategory);
    return products;
  }, [activeCategory]);

  const filteredProducts = useMemo(
    () => filterProducts(catalogProducts, searchQuery),
    [catalogProducts, searchQuery]
  );

  const activeCategoryData = activeCategory ? getCategoryBySlug(activeCategory) : undefined;

  const categoriesToShow = activeCategory
    ? activeCategoryData
      ? [activeCategoryData]
      : []
    : productCategories;

  return (
    <>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-12 max-w-5xl lg:max-w-6xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-foreground/60 max-w-3xl mx-auto">{description}</p>
        </motion.div>
      )}

      <ProductCategoryNav activeSlug={activeCategory ?? 'all'} />

      <ProductSearch value={searchQuery} onChange={setSearchQuery} />

      {isSearching && filteredProducts.length > 0 && (
        <p className="text-center text-foreground/60 mb-8 -mt-4">
          {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'} found
        </p>
      )}

      {isSearching && filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center py-16 mb-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-border/40"
        >
          <Search className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">No products found</h2>
          <p className="text-foreground/60 mb-6">
            Try a different search term or clear your search to browse all products.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-colors"
          >
            Clear search
          </button>
        </motion.div>
      )}

      {!(isSearching && filteredProducts.length === 0) && (
        <>
          {isSearching ? (
            <ProductGrid
              items={filteredProducts}
              placeholderCount={0}
              gridKey={searchQuery.trim() || 'search'}
            />
          ) : activeCategory && activeCategoryData ? (
            <ProductGrid
              items={getProductsByCategory(activeCategory)}
              placeholderCount={Math.max(
                0,
                PRODUCTS_PER_CATEGORY - getProductsByCategory(activeCategory).length
              )}
              gridKey={activeCategory}
            />
          ) : (
            categoriesToShow.map((category) => (
              <CategorySection
                key={category.slug}
                category={category}
                items={getProductsByCategory(category.slug)}
                showPlaceholders
              />
            ))
          )}
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easeOut }}
        className="mt-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Don&apos;t see it yet?
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          We might already be building it. Tell us what you need.
        </p>
        <Link href="/product-request">
          <motion.button
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300"
          >
            Request a Product
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}
