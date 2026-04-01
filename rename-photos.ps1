# Sleeping Buffalo Hot Springs - Photo Importer
# PowerShell 5.1 compatible
# Usage: powershell -ExecutionPolicy Bypass -File rename-photos.ps1

$targetNames = @(
    "hero-outdoor-pool.png",
    "hero-aerial-sunset.png",
    "hero-entrance-sunset.png",
    "aerial-steam-mist.png",
    "aerial-full-property.png",
    "aerial-rv-park.png",
    "entrance-daytime.png",
    "indoor-pool-green-wide.png",
    "indoor-pool-entry.png",
    "indoor-pool-night-teal.png",
    "indoor-pool-night-amber.png",
    "outdoor-pool-main.png",
    "hot-tub-bubbles.png",
    "sauna.png",
    "locker-room-stone.png",
    "showers-locker.png",
    "lobby-front-desk.png",
    "camp-store.png",
    "saloon-exterior-night.png",
    "saloon-interior-bison.png",
    "saloon-bar-red.png",
    "saloon-bar-angle.png",
    "saloon-game-room.png",
    "restaurant-dining.png",
    "restaurant-kitchen.png",
    "cabin-exterior-day.png",
    "cabin-exterior-night.png",
    "cabin-stone-detail.png",
    "history-bw-aerial.png",
    "cabin-5-exterior.png",
    "cabin-1-fireplace.png",
    "cabin-5-interior.png",
    "suite-1-king.png",
    "suite-1-shower.png",
    "suite-1-bathroom.png",
    "suite-2-beds.png",
    "suite-kitchen.png",
    "nelson-reservoir-sunset.png",
    "greenhouse-interior.png"
)

$descriptions = @(
    "New outdoor pool with SB logo, steam, lounge chairs",
    "Golden hour aerial: resort + Nelson Reservoir",
    "Entrance sign at sunset with Saloon behind",
    "Drone through steam/fog, outdoor pool visible",
    "Wide aerial: pond, RV park, main building",
    "Aerial of RV park with Montana plains",
    "Entrance sign daytime, American flag",
    "Indoor pool wide angle, green water, wood ceiling",
    "Close angle step entry into indoor pool",
    "Indoor pool at night, turquoise lights",
    "Indoor pool evening, amber wall sconces",
    "Outdoor pool ground level: SB logo, steam",
    "Close-up mineral water bubbles, blue tile",
    "Cedar sauna with wooden bucket and ladle",
    "Locker room with quarry stone wall",
    "Shower area with stone wall, wooden lockers",
    "Front desk with SB rug, snack counter",
    "Camp store shelves with snacks",
    "Buffalo Saloon lit up at night",
    "Saloon interior: bison head above bar",
    "Bar with red ceiling, iron chandelier",
    "Bar angle with liquor shelf, leather stools",
    "Game room: pool table, dart machines",
    "54 Prime dining room, teal glasses, mural",
    "Commercial stainless steel kitchen",
    "Cabin daytime: log and stone, deck, trees",
    "Cabin under Montana starfield at night",
    "Cabin close-up: stone base, log siding",
    "Vintage B&W postcard, Legion Health Pool 1920s",
    "Cabin 5: round-log construction, porch",
    "Cabin 1: stone fireplace, hardwood floors",
    "Cabin 5: vaulted ceiling, rustic log bed",
    "Suite 1: king bed, leather couch",
    "Suite 1 shower: marble tile, mosaic accent",
    "Suite 1 bathroom: double vanity, marble top",
    "Suite 2: two queen beds, rustic frames",
    "Shared suite kitchen: stainless appliances",
    "Nelson Reservoir sunset, dramatic clouds",
    "Greenhouse interior: lush raised beds"
)

# Figure out where public/images is
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$destFolder = Join-Path $scriptDir "public\images"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SLEEPING BUFFALO - Photo Importer" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Photos will be copied into:" -ForegroundColor Gray
Write-Host "  $destFolder" -ForegroundColor White
Write-Host ""

# Make sure destination exists
if (-not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
}

# Ask for source folder
$sourceFolder = Read-Host "Enter the full path to your photos folder"
$sourceFolder = $sourceFolder.Trim('"').Trim("'")

if (-not (Test-Path $sourceFolder)) {
    Write-Host ""
    Write-Host "ERROR: Folder not found: $sourceFolder" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit
}

# Find image files
$photos = Get-ChildItem -Path $sourceFolder -File | Where-Object {
    $_.Extension -match '\.(png|jpg|jpeg)$'
} | Sort-Object Name

if ($photos.Count -eq 0) {
    Write-Host ""
    Write-Host "ERROR: No image files found in that folder." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit
}

# Show numbered list
Write-Host ""
Write-Host "Found $($photos.Count) image(s):" -ForegroundColor Green
Write-Host ""

for ($i = 0; $i -lt $photos.Count; $i++) {
    $n = $i + 1
    $pad = "$n".PadLeft(3, ' ')
    $sizeMB = [math]::Round($photos[$i].Length / 1048576, 1)
    Write-Host "  $pad)  $($photos[$i].Name)  ($sizeMB MB)" -ForegroundColor White
}

# Loop through targets
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Match each website image to a photo" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Type the photo NUMBER, S to skip, Q to quit." -ForegroundColor Yellow
Write-Host ""

$copied = 0
$skipped = 0

for ($t = 0; $t -lt $targetNames.Count; $t++) {
    $tName = $targetNames[$t]
    $tDesc = $descriptions[$t]
    $tNum = $t + 1

    Write-Host "[$tNum/39] " -NoNewline -ForegroundColor DarkGray
    Write-Host "$tName" -ForegroundColor Cyan
    Write-Host "        $tDesc" -ForegroundColor DarkGray

    $done = $false
    while (-not $done) {
        $answer = Read-Host "  Photo #"
        $answer = $answer.Trim()

        if ($answer -eq "Q" -or $answer -eq "q") {
            Write-Host ""
            Write-Host "Quitting early." -ForegroundColor Yellow
            $t = $targetNames.Count
            $done = $true
        }
        elseif ($answer -eq "S" -or $answer -eq "s" -or $answer -eq "") {
            Write-Host "  Skipped." -ForegroundColor DarkGray
            $skipped++
            $done = $true
        }
        else {
            $pick = 0
            $isNum = [int]::TryParse($answer, [ref]$pick)

            if ($isNum -and $pick -ge 1 -and $pick -le $photos.Count) {
                $src = $photos[$pick - 1].FullName
                $dst = Join-Path $destFolder $tName
                try {
                    Copy-Item -Path $src -Destination $dst -Force
                    $sizeMB = [math]::Round((Get-Item $dst).Length / 1048576, 1)
                    Write-Host "  Copied: $($photos[$pick - 1].Name) -> $tName ($sizeMB MB)" -ForegroundColor Green
                    $copied++
                    $done = $true
                }
                catch {
                    Write-Host "  ERROR copying file: $_" -ForegroundColor Red
                }
            }
            else {
                Write-Host "  Invalid. Enter 1-$($photos.Count), S to skip, Q to quit." -ForegroundColor Red
            }
        }
    }
    Write-Host ""
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DONE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Copied:  $copied" -ForegroundColor Green
Write-Host "  Skipped: $skipped" -ForegroundColor DarkGray
Write-Host ""
Write-Host "Photos are in: $destFolder" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
