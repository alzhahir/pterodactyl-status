<x-header-unauth>
    <div class="flex flex-col justify-center items-center text-4xl md:text-6xl my-5 py-10 uppercase font-black h-1">
        <span>Latest status</span>
    </div>
    <div class="grid justify-stretch sm:grid-cols-1 md:grid-cols-2">
        @php
            $i = 2;
        @endphp
        @if ($i == 1)
            <div class="md:col-span-2">
                <x-placeholder />
            </div>
        @else
        <x-placeholder />
        <x-placeholder />
        @endif
        {{-- <x-placeholder /> --}}
    </div>
</x-header-unauth>