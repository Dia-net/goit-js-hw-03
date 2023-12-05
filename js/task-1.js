function slugify(title){
    const args = title.toLowerCase().split(' ');
    const slug = args.join('-');
return slug;
}
